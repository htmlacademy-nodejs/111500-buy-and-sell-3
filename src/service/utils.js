'use strict';

const path = require(`path`);

const PATH_TO_MOCKS = path.resolve(__dirname, `../../mock.json`);

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = {getRandomNumber, PATH_TO_MOCKS};
