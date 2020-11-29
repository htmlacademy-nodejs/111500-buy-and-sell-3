'use strict';

const path = require(`path`);

const express = require(`express`);

const myRouter = require(`./routes/my`);
const offersRouter = require(`./routes/offers`);
const OfferApi = require(`./services/offer-api`);
const MainApi = require(`./services/main-api`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const UPLOAD_DIR = `upload`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(express.static(path.resolve(__dirname, UPLOAD_DIR)));
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);

app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.get(`/`, async (req, res) => {
  const {data} = await OfferApi.getOffers();
  res.render(`main`, {_offers: data}); // нижнее подчёркивание нужно из-за этого бага https://github.com/pugjs/pug/issues/3263#issuecomment-720063740
});
app.get(`/register`, (req, res) => res.render(`sign-up`));
app.get(`/login`, (req, res) => res.render(`login`));
app.get(`/search`, async (req, res) => {
  const {query} = req.query;
  try {
    const {data} = await MainApi.search(query);
    res.render(`search-result`, {results: data});
  } catch (e) {
    res.render(`search-result`, {
      results: []
    });
  }


});

app.listen(DEFAULT_PORT, () => {
  console.log(`Сервер на порту ${DEFAULT_PORT}`);
});
