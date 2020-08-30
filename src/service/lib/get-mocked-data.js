'use strict';

const {readFile} = require(`fs`).promises;

const chalk = require(`chalk`);

const {PATH_TO_MOCKS} = require(`../utils`);

let data = [];

const getMockedData = async () => {
  if (data.length > 0) {
    return data;
  }
  try {
    const fileContent = await readFile(PATH_TO_MOCKS, `utf8`);
    if (!fileContent) {
      return Promise.reject([]);
    }
    data = JSON.parse(fileContent);
  } catch (e) {
    console.log(chalk.red(e));
    return Promise.reject(e);
  }

  return data;
};

module.exports = getMockedData;
