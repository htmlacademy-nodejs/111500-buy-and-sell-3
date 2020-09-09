'use strict';

const path = require(`path`);
const {readFile} = require(`fs`).promises;
const os = require(`os`);

const {TEXTS_FOLDER} = require(`./constants`);


const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

const getArrayFromFile = async (fileName) => {
  const list = await readFile(path.resolve(__dirname, `${TEXTS_FOLDER}/`, fileName), `utf8`);
  return list.split(os.EOL).filter((i) => i);
};

module.exports = {getRandomNumber, getArrayFromFile};
