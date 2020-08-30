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
    let isDeleted = false;
    this._offers = this._offers.filter((i) => {
      if (i.id === id) {
        isDeleted = true;
        return false;
      }
      return true;
    });
    return isDeleted;
  }

  getComments(offerId) {
    const offer = this._offers.find((i) => i.id === offerId);
    return offer ? offer.comments : null;
  }
}

module.exports = OffersService;
