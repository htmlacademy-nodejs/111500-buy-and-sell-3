'use strict';

const {Router} = require(`express`);

const offersRouter = require(`./offers`);
const getMockedData = require(`../lib/get-mocked-data`);
const OffersService = require(`../data-service/offers`);

const app = new Router();

(async () => {
  const mockedData = await getMockedData();
  offersRouter(app, new OffersService(mockedData));
})();

module.exports = app;
