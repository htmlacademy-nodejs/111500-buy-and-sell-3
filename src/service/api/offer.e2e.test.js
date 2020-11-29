'use strict';

const request = require(`supertest`);
const getApp = require(`./index`);

const mockedData = [{"id": `HZRwwwHNZg18XCETAo4WS`, "title": `Отдам в хорошие руки подшивку «Мурзилка».`, "picture": `item1.jpg`, "description": `Кажется, что это хрупкая вещь. Мой дед не мог её сломать. Кому нужен этот новый телефон, если тут такое...`, "type": `offer`, "sum": 19242, "category": [`Ноутбуки`], "comments": [{"id": `eTcxy-ovct2ZzA_TAc9TX`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `EcjjHjppkixExbBQt1ttu`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `N4vMfxBejrkwJuaVXFxUz`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `yrci7Og--MbUXS0_P4JLE`, "text": `Почему в таком ужасном состоянии?`}, {"id": `H_E7KaRKxd_XNc42eJNtG`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `tTLpObrA7WRZ8B5B5YTJN`, "text": `Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `LFEJXyJQDHDtkHYbZ0-p3`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `vamu49ZkMkoeCNWbmu7sL`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}]}, {"id": `wdIiNDisGEcKbsBnwC4kB`, "title": `Отдам ножки для стола Икеа.`, "picture": `item1.jpg`, "description": `Таких предложений больше нет! Две страницы заляпаны свежим кофе.`, "type": `sale`, "sum": 78395, "category": [`Игры`, `Животные`, `Журналы`, `Вентиляторы`], "comments": [{"id": `MnoyWruGkmKd9dd2ZmXVA`, "text": `Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `QbnSbyWSyCmDvD4wllHlU`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `p33O2D7Am-qOFy2Tl3b-t`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `E-sBTmy2_fS7cMUnJwMg2`, "text": `Совсем немного...`}, {"id": `atdU8AMKGouledFcpxltA`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}]}, {"id": `UI4tXi5TSJi1KCHqPfn61`, "title": `Продам отличную подборку фильмов на VHS.`, "picture": `item1.jpg`, "description": `Пользовались бережно и только по большим праздникам., Продаю с болью в сердце...`, "type": `offer`, "sum": 26359, "category": [`Журналы`, `Вентиляторы`, `Ноутбуки`, `Аксессуары`], "comments": [{"id": `mi704W8B4aJfxU-jx_hLu`, "text": `Почему в таком ужасном состоянии?`}, {"id": `gpNBVpHvq4GHmlvnA2XYt`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `6FCWXAhzdkA-JhsqZ9Vck`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `bEj1nWkywRXOXykrqKUsy`, "text": `Оплата наличными или перевод на карту?`}, {"id": `5czcAMJsPQjIe7ZO74x2G`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `osPBGzyEnzqr_6gN3HcfE`, "text": `Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `VWAPMfAcfiBC23i1Q6nVM`, "text": `Вы что?! В магазине дешевле.`}, {"id": `ba4HiOTUH30Kpaq7FKxbs`, "text": `Совсем немного...`}, {"id": `SnVyxrS5rNZ_oC_IZz-WC`, "text": `Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца.`}]}];
const mockedNewOffer = {"title": `Отдам в хорошие руки подшивку «Мурзилка».`, "picture": `item1.jpg`, "description": `Кажется, что это хрупкая вещь. Мой дед не мог её сломать. Кому нужен этот новый телефон, если тут такое...`, "type": `offer`, "sum": 19242, "category": [`Ноутбуки`], "comments": [{"id": `eTcxy-ovct2ZzA_TAc9TX`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `EcjjHjppkixExbBQt1ttu`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `N4vMfxBejrkwJuaVXFxUz`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `yrci7Og--MbUXS0_P4JLE`, "text": `Почему в таком ужасном состоянии?`}, {"id": `H_E7KaRKxd_XNc42eJNtG`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `tTLpObrA7WRZ8B5B5YTJN`, "text": `Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `LFEJXyJQDHDtkHYbZ0-p3`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `vamu49ZkMkoeCNWbmu7sL`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}]};
const updatedOffer = {"title": `Отдам в хорошие руки подшивку «Мурзилка».`, "picture": `item25.png`, "description": `Кажется, что это хрупкая вещь. Мой дед не мог её сломать. Кому нужен этот новый телефон, если тут такое...`, "type": `offer`, "sum": 10, "category": [`Ноутбуки`], "comments": [{"id": `eTcxy-ovct2ZzA_TAc9TX`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `EcjjHjppkixExbBQt1ttu`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `N4vMfxBejrkwJuaVXFxUz`, "text": `С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту?`}, {"id": `yrci7Og--MbUXS0_P4JLE`, "text": `Почему в таком ужасном состоянии?`}, {"id": `H_E7KaRKxd_XNc42eJNtG`, "text": `Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}, {"id": `tTLpObrA7WRZ8B5B5YTJN`, "text": `Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого`}, {"id": `LFEJXyJQDHDtkHYbZ0-p3`, "text": `Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`}, {"id": `vamu49ZkMkoeCNWbmu7sL`, "text": `А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво? Продаю в связи с переездом. Отрываю от сердца. Неплохо, но дорого Оплата наличными или перевод на карту? Вы что?! В магазине дешевле. Почему в таком ужасном состоянии?`}]};
const app = getApp(mockedData);
describe(`Returns offer list`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/offers`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be 3 elements length`, async () => {
    expect(response.body.length).toEqual(3);
  });

  test(`First item title should be "Отдам в хорошие руки подшивку «Мурзилка»."`, async () => {
    expect(response.body[0].title).toEqual(`Отдам в хорошие руки подшивку «Мурзилка».`);
  });
});

describe(`Returns single offer with certain id`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/offers/HZRwwwHNZg18XCETAo4WS`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object type`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Title should be "Отдам в хорошие руки подшивку «Мурзилка»."`, async () => {
    expect(response.body.title).toEqual(`Отдам в хорошие руки подшивку «Мурзилка».`);
  });
});

describe(`Can't find offer`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/offers/HZ4WS`);
  });

  test(`Status code should be 404`, async () => {
    expect(response.statusCode).toBe(404);
  });

  test(`Response should be "Not found. id HZ4WS"`, async () => {
    expect(response.text).toBe(`Not found. id HZ4WS`);
  });

});

describe(`Creates new offer`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .post(`/api/offers`)
      .send(mockedNewOffer);
  });

  test(`Status code should be 201`, async () => {
    expect(response.statusCode).toBe(201);
  });

  test(`Response has property "id"`, async () => {
    expect(response.body).toHaveProperty(`id`);
  });

  test(`Title should be "Отдам в хорошие руки подшивку «Мурзилка»."`, async () => {
    expect(response.body.title).toBe(`Отдам в хорошие руки подшивку «Мурзилка».`);
  });
});

describe(`Updates offer`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .put(`/api/offers/HZRwwwHNZg18XCETAo4WS`)
      .send(updatedOffer);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Prop "picture" should be "item25.png"`, async () => {
    expect(response.body.picture).toBe(`item25.png`);
  });

  test(`Prop "sum" should be 10`, async () => {
    expect(response.body.sum).toBe(10);
  });
});

describe(`Can't update offer, because not all props provided`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .put(`/api/offers/HZRwwwHNZg18XCETAo4WS`)
      .send({"sum": 10});
  });

  test(`Status code should be 400`, async () => {
    expect(response.statusCode).toBe(400);
  });

  test(`Response text should be "Bad request"`, async () => {
    expect(response.text).toBe(`Bad request`);
  });
});

describe(`Deletes offer`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/offers/HZRwwwHNZg18XCETAo4WS`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Response should be object`, async () => {
    expect(response.body.id).toBe(`HZRwwwHNZg18XCETAo4WS`);
  });
});

describe(`Can't delete offer, because it doesn't exist`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/offers/HZTAo4WS`);
  });

  test(`Status code should be 404`, async () => {
    expect(response.statusCode).toBe(404);
  });

  test(`Response should be "Not found. id HZTAo4WS"`, async () => {
    expect(response.text).toBe(`Not found. id HZTAo4WS`);
  });
});

describe(`Returns comments`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/offers/HZRwwwHNZg18XCETAo4WS/comments`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be 8 elements length`, async () => {
    expect(response.body.length).toEqual(8);
  });

  test(`First comment id should be "eTcxy-ovct2ZzA_TAc9TX"`, async () => {
    expect(response.body[0].id).toEqual(`eTcxy-ovct2ZzA_TAc9TX`);
  });
});

describe(`Deletes comment`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/offers/HZRwwwHNZg18XCETAo4WS/comments/eTcxy-ovct2ZzA_TAc9TX`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Should returns object with id "eTcxy-ovct2ZzA_TAc9TX"`, async () => {
    expect(response.body.id).toEqual(`eTcxy-ovct2ZzA_TAc9TX`);
  });
});

describe(`Adds new comment`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .post(`/api/offers/HZRwwwHNZg18XCETAo4WS/comments`)
      .send({"text": `new comment`});
  });

  test(`Status code should be 201`, async () => {
    expect(response.statusCode).toBe(201);
  });

  test(`Response has property "id"`, async () => {
    expect(response.body).toHaveProperty(`id`);
  });
});

