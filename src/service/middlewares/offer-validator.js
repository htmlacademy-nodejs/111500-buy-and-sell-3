'use strict';

const {HTTP_CODE} = require(`../constants`);

const offerKeys = [`category`, `description`, `picture`, `title`, `type`, `sum`];

module.exports = (req, res, next) => {
  const userOfferKeys = Object.keys(req.body);
  const isAllKeysExist = offerKeys.every((i) => userOfferKeys.includes(i));
  if (!isAllKeysExist) {
    return res.status(HTTP_CODE.BAD_REQUEST).send(`Bad request`);
  }
  return next();
};
