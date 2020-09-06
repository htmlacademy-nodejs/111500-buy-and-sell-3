'use strict';

const {Router} = require(`express`);

const offersRouter = require(`./offer`);
const categoryRouter = require(`./category`);
const searchRouter = require(`./search`);
const {getMockedData, getMockedCategoryList} = require(`../lib/get-mocked-data`);
const OfferService = require(`../data-service/offer`);
const CategoryService = require(`../data-service/category`);
const CommentService = require(`../data-service/comment`);
const SearchService = require(`../data-service/search`);

const app = new Router();

(async () => {
  const mockedData = await getMockedData();
  const mockedCategoryList = await getMockedCategoryList();
  offersRouter(app, new OfferService(mockedData), new CommentService());
  categoryRouter(app, new CategoryService(mockedCategoryList));
  searchRouter(app, new SearchService(mockedData));
})();

module.exports = app;
