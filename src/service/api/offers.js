'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

const offersRouter = new Router();

module.exports = (app, offerService) => {
  app.use(`/offers`, offersRouter);
  offersRouter.get(`/`, async (req, res) => {
    const offers = offerService.getAll();
    res.status(HTTP_CODE.OK).json(offers);
  });
  offersRouter.get(`/:offerId`, async (req, res) => {
    const {offerId} = req.params;
    const offer = offerService.getOne(offerId);

    if (!offer) {
      res.status(HTTP_CODE.NOT_FOUND).json(`Not found with id ${offerId}`);
    } else {
      res.status(HTTP_CODE.OK).json(offerService.getOne(offerId));
    }
  });
  offersRouter.post(`/`, async (req, res) => {
    const createdOffer = offerService.create(req.body);
    res.status(HTTP_CODE.CREATED).json(createdOffer);
  });
};


