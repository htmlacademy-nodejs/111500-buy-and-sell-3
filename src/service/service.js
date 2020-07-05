'use strict';

const {writeFile, readFile} = require(`fs`).promises;
const os = require(`os`);
const http = require(`http`);

const chalk = require(`chalk`);

const {version} = require(`../../package.json`);
const constants = require(`./constants`);
const {getRandomNumber} = require(`./utils`);

const [commandName = ``, commandValue = null] = process.argv.slice(2);

const runCommand = async (name, value) => {
  switch (name) {
    case `--generate`:
      await generateOffer(value);
      break;
    case `--version`:
      showVersion();
      break;
    case `--server`:
      runServer(value);
      break;
    default:
      showHelp();
  }
};

const showHelp = () => {
  console.log(chalk.gray(constants.helpText));
};

const showVersion = () => {
  console.log(chalk.blue(`v${version}`));
};

const runServer = (userPort) => {
  const port = userPort || constants.DEFAULT_PORT;
  const httpServer = http.createServer(onClientConnect);
  httpServer.listen(port, (err) => {
    if (err) {
      console.error(chalk.red(`Ошибка при создании сервера`));
    }
    console.log(`Слушаю на порту ${port}`);
  });

};

const onClientConnect = async (request, response) => {
  switch (request.url) {
    case `/`:
      let postList;
      try {
        postList = JSON.parse(await readFile(__dirname + `/mock.json`, `utf8`));
      } catch (e) {
        if (e && e.code === `ENOENT`) {
          response.writeHead(constants.HTTP_NOT_FOUND_CODE, {
            'Content-Type': `text/plain; charset=UTF-8`
          });
          response.end(`Not found`);
          return;
        }
        console.log(chalk.red(e));
      }
      let titlesInLi = ``;
      postList.forEach((post) => {
        titlesInLi += `<li>${post.title}</li>`;
      });
      response.writeHead(constants.HTTP_OK_CODE, {
        'Content-Type': `text/html; charset=UTF-8`
      });
      response.end(`<ul>${titlesInLi}</ul>`);
  }
};

const generateOffer = async (value) => {
  const objectInArrayNumber = Number.parseInt(value, 10) || constants.DEFAULT_NUMBER;
  if (objectInArrayNumber > constants.MAX_COUNT) {
    console.log(chalk.red(`Не больше 1000 объявлений`));
    process.exit(1);
  }
  const resultArray = [];
  for (let i = 0; i < objectInArrayNumber; i++) {
    resultArray.push(await generateMockedObject());
  }
  try {
    await writeFile(`./mock.json`, JSON.stringify(resultArray));
  } catch (e) {
    console.log(chalk.red(`Ошибка: ${e}`));
    process.exit(1);
  }
  console.log(chalk.green(`Готово!`));
  process.exit(0);
};

const getArrayFromFile = async (path) => {
  const list = await readFile(__dirname + path, `utf8`);
  return list.split(os.EOL).filter((i) => i);
};

const randomSliceArray = async (pathToFile, maxLength) => {
  const list = await getArrayFromFile(pathToFile);
  const start = getRandomNumber(0, list.length - 1);
  const end = getRandomNumber(start + 1, maxLength ? start + 1 + maxLength : list.length);
  return list.slice(start, end);
};

const generateMockedObject = async () => {
  const titleList = await getArrayFromFile(`/../../data/titles.txt`);
  return {
    title: titleList[getRandomNumber(0, titleList.length)],
    picture: `item${getRandomNumber(constants.PICTURE_NUMBER_MIN, constants.PICTURE_NUMBER_MAX)}.jpg`,
    description: await randomSliceArray(`/../../data/sentences.txt`, constants.SENTENCES_IN_DESCRIPTION_MAX),
    type: constants.typeList[getRandomNumber(0, constants.typeList.length)],
    sum: getRandomNumber(constants.SUM_MIN, constants.SUM_MAX),
    category: await randomSliceArray(`/../../data/categories.txt`)
  };
};
if (!module.parent) {
  runCommand(commandName, commandValue);
}

