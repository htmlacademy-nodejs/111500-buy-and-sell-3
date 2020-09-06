'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

const categoriesRouter = new Router();

module.exports = (app, service) => {
  app.use(`/categories`, categoriesRouter);

  categoriesRouter.get(`/`, async (req, res) => {
    const categories = service.getAll();
    res.status(HTTP_CODE.OK).json(categories);
  });
};
