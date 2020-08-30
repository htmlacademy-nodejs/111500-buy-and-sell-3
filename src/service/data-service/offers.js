'use strict';

const {nanoid} = require(`nanoid`);

class OffersService {
  constructor(offers) {
    this._offers = offers;
  }
  getAll() {
    return this._offers;
  }

  getOne(id) {
    return this._offers.find((i) => i.id === id);
  }

  create(offer) {
    this._offers.push(Object.assign(offer, {id: nanoid()}));
  }
}

module.exports = OffersService;
