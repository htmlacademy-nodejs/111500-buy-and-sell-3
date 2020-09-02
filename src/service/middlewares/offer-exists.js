'use strict';

const {HTTP_CODE} = require(`../constants`);

module.exports = (service) => (req, res, next) => {
  const {offerId} = req.params;
  const offer = service.getOne(offerId);
  if (!offer) {
    return res.status(HTTP_CODE.NOT_FOUND).send(`Not found. id ${offerId}`);
  }
  res.locals.offer = offer;
  return next();
};
