'use strict';

class CategoryService {
  constructor(categoryList) {
    this._categoryList = categoryList;
  }

  getAll() {
    return this._categoryList;
  }
}

module.exports = CategoryService;
