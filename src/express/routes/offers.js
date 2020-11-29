'use strict';

const {Router} = require(`express`);
const multer = require(`multer`);
const path = require(`path`);
const {nanoid} = require(`nanoid`);

const OfferApi = require(`../services/offer-api`);
const CategoryApi = require(`../services/category-api`);

const UPLOAD_DIR = `../upload/img/`;
const offersRouter = new Router();
const uploadDirAbsolute = path.resolve(__dirname, UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: uploadDirAbsolute,
  filename: (req, file, cb) => {
    const uniqueName = nanoid(10);
    const extension = file.originalname.split(`.`).pop();
    cb(null, `${uniqueName}.${extension}`);
  }
});

const upload = multer({storage});

offersRouter.get(`/category/:id`, (req, res) => res.render(`category`));
offersRouter.get(`/add`, (req, res) => res.render(`ticket/new-ticket`));
offersRouter.post(`/add`, upload.single(`avatar`), async (req, res) => {
  const {body, file} = req;
  const offerData = {
    picture: file.filename,
    sum: body.price,
    type: body.action,
    description: body.comment,
    title: body[`ticket-name`],
    category: body.category
  };
  try {
    await OfferApi.addOffer(offerData);
    res.redirect(`/my`);
  } catch (e) {
    res.redirect(`back`);
  }
});
offersRouter.get(`/edit/:id`, async (req, res) => {
  const {id} = req.params;
  const [categories, offer] = await Promise.all([CategoryApi.getCategories(), OfferApi.getOneOffer(id)]);
  res.render(`ticket/ticket-edit`, {categories: categories.data, _offer: offer.data});
});
offersRouter.get(`/:id`, (req, res) => res.send(req.originalUrl));

module.exports = offersRouter;
