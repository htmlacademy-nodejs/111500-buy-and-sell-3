'use strict';

const express = require(`express`);

const getRoutes = require(`../api`);
const {HTTP_CODE} = require(`../constants`);

const DEFAULT_PORT = 3000;

const runServer = async (userPort) => {
  const port = userPort || DEFAULT_PORT;

  const app = express();

  app.use(express.json());
  app.use(`/api`, await getRoutes());

  app.use((req, res) => {
    res.status(HTTP_CODE.NOT_FOUND).send(`Not found`);
  });
  app.listen(port, () => {
    console.log(`Слушаю на порту ${port}`);
  });
};

module.exports = runServer;
