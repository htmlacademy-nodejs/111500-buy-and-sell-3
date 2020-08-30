'use strict';

class OffersService {
  constructor(offers) {
    this._offers = offers;
  }
  getAll() {
    console.log(`getAll`, this._offers);
    return this._offers;
  }
}

module.exports = OffersService;
