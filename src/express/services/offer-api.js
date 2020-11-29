'use strict';

const axios = require(`axios`);
const {API_TIMEOUT} = require(`../constants`);
const {API_BASE_URL} = require(`../constants`);

const _axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
});

class OfferApi {

  getOffers() {
    return _axios.get(`/offers`);
  }

  getOneOffer(id) {
    return _axios.get(`/offers/${id}`);

  }

  getComments(offerId) {
    return _axios.get(`/offers/${offerId}/comments`);
  }

  addOffer(offerData) {
    return _axios.post(`/offers`, offerData);
  }
}

module.exports = new OfferApi();
