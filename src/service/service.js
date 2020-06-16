'use strict';

const version = require(`../../package.json`).version;
const constants = require(`./constants`);
const fs = require(`fs`);

const argv = process.argv;

const hasHelpArg = !!argv.find((i) => i === `--help`);
const hasVersionArg = !!argv.find((i) => i === `--version`);
const generateArgIndex = argv.indexOf(`--generate`);

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomSliceArray = (arrayName, maxLength) => {
  const start = getRandomNumber(0, constants[arrayName].length - 1);
  const end = getRandomNumber(start + 1, maxLength ? start + 1 + maxLength : constants[arrayName].length);
  return constants[arrayName].slice(start, end);
};

const generateMockedObject = () => {
  return {
    title: constants.titleList[getRandomNumber(0, constants.titleList.length)],
    picture: `item${getRandomNumber(constants.PICTURE_NUMBER_MIN, constants.PICTURE_NUMBER_MAX)}.jpg`,
    description: randomSliceArray(`descriptionList`, constants.SENTENCES_IN_DESCRIPTION_MAX),
    type: constants.typeList[getRandomNumber(0, constants.typeList.length)],
    sum: getRandomNumber(constants.SUM_MIN, constants.SUM_MAX),
    category: randomSliceArray(`categoryList`)
  };
};

if (generateArgIndex >= 0) {
  const resultArray = [];
  let generateArgValue = argv[generateArgIndex + 1];
  if (!generateArgValue || typeof generateArgValue !== `number`) {
    generateArgValue = constants.DEFAULT_COUNT;
  }
  if (generateArgValue > constants.MAX_COUNT) {
    console.log(`Не больше 1000 объявлений`)
    process.exit(1);
  }
  for (let i = 0; i < generateArgValue; i++) {
    resultArray.push(generateMockedObject());
  }
  fs.writeFile(`./mock.json`, JSON.stringify(resultArray), (err) => {
    if (err) {
      process.exit(1);
    }
    process.exit(0);
  });
}

if (hasHelpArg) {
  console.log(constants.helpText);
}
if (hasVersionArg) {
  console.log(`v${version}`);
}
