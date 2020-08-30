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
};


