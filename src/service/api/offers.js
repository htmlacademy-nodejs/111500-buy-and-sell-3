'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);
const offerValidator = require(`../middlewares/offer-validator`);
const offerExists = require(`../middlewares/offer-exists`);
const commentsService = require(`../data-service/comments`);

const offersRouter = new Router();

module.exports = (app, offerService) => {
  app.use(`/offers`, offersRouter);

  offersRouter.get(`/`, async (req, res) => {
    const offers = offerService.getAll();
    res.status(HTTP_CODE.OK).json(offers);
  });
  offersRouter.get(`/:offerId`, offerExists(offerService), async (req, res) => {
    res.status(HTTP_CODE.OK).json(res.locals.offer);
  });
  offersRouter.post(`/`, offerValidator, async (req, res) => {
    const createdOffer = offerService.create(req.body);
    res.status(HTTP_CODE.CREATED).json(createdOffer);
  });
  offersRouter.put(`/:offerId`, [offerExists(offerService), offerValidator], async (req, res) => {
    const {offerId} = req.params;
    const updatedOffer = offerService.update(offerId, req.body);
    res.status(HTTP_CODE.OK).json(updatedOffer);
  });
  offersRouter.delete(`/:offerId`, offerExists(offerService), async (req, res) => {
    const {offerId} = req.params;
    offerService.delete(offerId);
    res.status(HTTP_CODE.OK).json(res.locals.offer);
  });

  // comments
  offersRouter.get(`/:offerId/comments`, offerExists(offerService), async (req, res) => {
    const {offer} = res.locals;
    const comments = commentsService.getAll(offer);
    res.status(HTTP_CODE.OK).json(comments);
  });
  offersRouter.delete(`/:offerId/comments/:commentId`, offerExists(offerService), async (req, res) => {
    const {offer} = res.locals;
    const {commentId} = req.params;
    const deletedComment = commentsService.delete(offer, commentId);
    res.status(HTTP_CODE.OK).json(deletedComment);
  });
};


