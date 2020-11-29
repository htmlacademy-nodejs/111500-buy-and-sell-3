'use strict';

const {Router} = require(`express`);

const myRouter = new Router();

const OfferApi = require(`../services/offer-api`);

myRouter.get(`/`, async (req, res) => {
  const {data} = await OfferApi.getOffers();
  res.render(`ticket/my-tickets`, {_offers: data}); // нижнее подчёркивание нужно из-за этого бага https://github.com/pugjs/pug/issues/3263#issuecomment-720063740
});
myRouter.get(`/comments`, async (req, res) => {
  const {data} = await OfferApi.getOffers();
  res.render(`comments`, {_offers: data.slice(0, 3)}); // нижнее подчёркивание нужно из-за этого бага https://github.com/pugjs/pug/issues/3263#issuecomment-720063740
});

module.exports = myRouter;
