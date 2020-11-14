'use strict';

const request = require(`supertest`);
const express = require(`express`);
const categoryRouter = require(`./category`);
const CategoryService = require(`../data-service/category`);

const mockedData = [`Книги`, `Разное`, `Посуда`, `Игры`, `Животные`, `Журналы`, `Вентиляторы`, `Ноутбуки`, `Аксессуары`, `Смартфоны`];

const app = express();
app.use(express.json());
app.use(`/categories`, categoryRouter(new CategoryService(mockedData)));
describe(`API returns category list`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/categories`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`In body should be curtain categories list`, async () => {
    expect(response.body).toEqual(expect.arrayContaining([`Книги`, `Разное`, `Посуда`, `Игры`, `Животные`, `Журналы`, `Вентиляторы`, `Ноутбуки`, `Аксессуары`, `Смартфоны`]));
  });
});
