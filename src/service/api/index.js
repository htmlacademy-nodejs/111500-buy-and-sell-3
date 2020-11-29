'use strict';

const express = require(`express`);

const {HTTP_CODE} = require(`../constants`);
const offersRouter = require(`./offer`);
const categoryRouter = require(`./category`);
const searchRouter = require(`./search`);
const OfferService = require(`../data-service/offer`);
const CategoryService = require(`../data-service/category`);
const CommentService = require(`../data-service/comment`);
const SearchService = require(`../data-service/search`);
const logger = require(`../lib/logger`).getLogger({name: `api`});

const app = express();

const getApp = (mockedData = [], mockedCategoryList = []) => {
  app.use(express.json());
  app.use((req, res, next) => {
    logger.debug(`Request ${req.url}`);
    res.on(`finish`, () => {
      logger.info(`Status code ${res.statusCode}`);
    });
    next();
  });

  app.use(`/api/offers`, offersRouter(new OfferService(mockedData), new CommentService()));
  app.use(`/api/categories`, categoryRouter(new CategoryService(mockedCategoryList)));
  app.use(`/api/search`, searchRouter(new SearchService(mockedData)));

  app.use((req, res) => {
    res.status(HTTP_CODE.NOT_FOUND).send(`Not found`);
    logger.error(`${req.url} not found`);
  });

  app.use((err, req, _res, _next) => {
    logger.error(`Error occurred on the route ${req.url} with message: ${err.message}`);
  });

  return app;
};

module.exports = getApp;
