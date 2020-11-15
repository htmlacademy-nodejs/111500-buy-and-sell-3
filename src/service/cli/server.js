'use strict';

const express = require(`express`);

const getRoutes = require(`../api`);
const {HTTP_CODE} = require(`../constants`);
const logger = require(`../lib/logger`).getLogger({name: `api`});

const DEFAULT_PORT = 3000;

const runServer = async (userPort) => {
  const port = userPort || DEFAULT_PORT;

  const app = express();

  app.use(express.json());
  app.use((req, res, next) => {
    logger.debug(`Request ${req.url}`);
    res.on(`finish`, () => {
      logger.info(`Status code ${res.statusCode}`);
    });
    next();
  });
  app.use(`/api`, await getRoutes());

  app.use((req, res) => {
    res.status(HTTP_CODE.NOT_FOUND).send(`Not found`);
    logger.error(`${req.url} not found`);
  });

  app.use((err, req, _res, _next) => {
    logger.error(`Error occurred on the route ${req.url} with message: ${err.message}`);
  });
  app.listen(port, (err) => {
    if (err) {
      return logger.error(err);
    }
    return logger.info(`Слушаю на порту ${port}`);
  });
};

module.exports = runServer;
