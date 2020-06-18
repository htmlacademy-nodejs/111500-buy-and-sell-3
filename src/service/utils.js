'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = {getRandomNumber};
