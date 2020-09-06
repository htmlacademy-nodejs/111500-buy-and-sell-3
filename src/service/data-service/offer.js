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

  update(id, fieldsToUpdate) {
    let offer = this.getOne(id);
    offer = Object.assign(offer, fieldsToUpdate);
    return offer;
  }

  delete(id) {
    this._offers = this._offers.filter((i) => i.id === id);
  }
}

module.exports = OffersService;
