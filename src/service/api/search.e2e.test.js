'use strict';

const request = require(`supertest`);
const express = require(`express`);

const SearchService = require(`../data-service/search`);
const searchRouter = require(`./search`);
const mockedData = [{"id": `HZRwwwHNZg18XCETAo4WS`, "title": `Отдам в хорошие руки подшивку «Мурзилка».`, "picture": `item1.jpg`, "description": `Кажется, что это хрупкая вещь. Мой дед не мог её сломать. Кому нужен этот новый телефон, если тут такое...`, "type": `offer`, "sum": 19242, "category": [`Ноутбуки`], "comments": [{"id": `eTcxy-ovct2ZzA_TAc9TX`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `EcjjHjppkixExbBQt1ttu`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `N4vMfxBejrkwJuaVXFxUz`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `yrci7Og--MbUXS0_P4JLE`, "text": `Почему в таком ужасном состоянии?`}, {"id": `H_E7KaRKxd_XNc42eJNtG`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `tTLpObrA7WRZ8B5B5YTJN`, "text": `Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `LFEJXyJQDHDtkHYbZ0-p3`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `vamu49ZkMkoeCNWbmu7sL`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}]}, {"id": `wdIiNDisGEcKbsBnwC4kB`, "title": `Отдам ножки для стола Икеа.`, "picture": `item1.jpg`, "description": `Таких предложений больше нет! Две страницы заляпаны свежим кофе.`, "type": `sale`, "sum": 78395, "category": [`Игры`, `Животные`, `Журналы`, `Вентиляторы`], "comments": [{"id": `MnoyWruGkmKd9dd2ZmXVA`, "text": `Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `QbnSbyWSyCmDvD4wllHlU`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `p33O2D7Am-qOFy2Tl3b-t`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `E-sBTmy2_fS7cMUnJwMg2`, "text": `Совсем немного...`}, {"id": `atdU8AMKGouledFcpxltA`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}]}, {"id": `UI4tXi5TSJi1KCHqPfn61`, "title": `Продам отличную подборку фильмов на VHS.`, "picture": `item1.jpg`, "description": `Пользовались бережно и только по большим праздникам., Продаю с болью в сердце...`, "type": `offer`, "sum": 26359, "category": [`Журналы`, `Вентиляторы`, `Ноутбуки`, `Аксессуары`], "comments": [{"id": `mi704W8B4aJfxU-jx_hLu`, "text": `Почему в таком ужасном состоянии?`}, {"id": `gpNBVpHvq4GHmlvnA2XYt`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `6FCWXAhzdkA-JhsqZ9Vck`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `bEj1nWkywRXOXykrqKUsy`, "text": `Оплата наличными или перевод на карту?`}, {"id": `5czcAMJsPQjIe7ZO74x2G`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `osPBGzyEnzqr_6gN3HcfE`, "text": `Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `VWAPMfAcfiBC23i1Q6nVM`, "text": `Вы что?! В магазине дешевле.`}, {"id": `ba4HiOTUH30Kpaq7FKxbs`, "text": `Совсем немного...`}, {"id": `SnVyxrS5rNZ_oC_IZz-WC`, "text": `Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца.`}]}];

const app = express();
app.use(express.json());
app.use(`/search`, searchRouter(new SearchService(mockedData)));

describe(`Returns search results`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/search`)
      .query({query: `Продам`});
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Body length should be 1`, async () => {
    expect(response.body.length).toBe(1);
  });

  test(`First element id should be "UI4tXi5TSJi1KCHqPfn61"`, async () => {
    expect(response.body[0].id).toBe(`UI4tXi5TSJi1KCHqPfn61`);
  });
});

test(`Returns 400 when no query string`,
    () => request(app)
    .get(`/search`)
    .expect(400)
);
