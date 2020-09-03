'use strict';

const {HTTP_CODE} = require(`../constants`);

const requiredKeys = [`id`, `text`];

module.exports = (req, res, next) => {
  const userCommentKeys = Object.keys(req.body);
  const isValidComment = requiredKeys.every((i) => userCommentKeys.includes(i));
  if (!isValidComment) {
    res.status(HTTP_CODE.BAD_REQUEST);
  }
  next();
};
