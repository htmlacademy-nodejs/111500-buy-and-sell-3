'use strict';

class SearchService {
  constructor(offerList) {
    this._offerList = offerList;
  }

  find(query) {
    return this._offerList.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));
  }

}

module.exports = SearchService;
