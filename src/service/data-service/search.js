'use strict';

class SearchService {
  constructor(offerList) {
    this._offers = offerList;
  }

  find(query = ``) {
    return this._offers.filter((offer) => offer.title.toLowerCase().includes(query.toLowerCase()));
  }

}

module.exports = SearchService;
