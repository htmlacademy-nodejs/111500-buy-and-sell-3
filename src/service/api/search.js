'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

const searchRouter = new Router();

module.exports = (app, service) => {
  app.use(`/search`, searchRouter);

  searchRouter.get(`/`, async (req, res) => {
    const {query} = req.query;
    const result = service.find(query);
    res.status(HTTP_CODE.OK).json(result);
  });
};
