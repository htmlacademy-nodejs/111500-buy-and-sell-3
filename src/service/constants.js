'use strict';

const DEFAULT_NUMBER = 1;
const MAX_COUNT = 1000;
const SENTENCES_IN_DESCRIPTION_MAX = 5;
const PICTURE_NUMBER_MIN = 1;
const PICTURE_NUMBER_MAX = 16;
const SUM_MIN = 1000;
const SUM_MAX = 100000;
const DEFAULT_PORT = 3000;
const HTTP_NOT_FOUND_CODE = 404;
const HTTP_OK_CODE = 200;

const helpText = `Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    service.js <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json`;

const typeList = [
  `offer`,
  `sale`
];

module.exports = {
  helpText,
  DEFAULT_NUMBER,
  MAX_COUNT,
  PICTURE_NUMBER_MIN,
  PICTURE_NUMBER_MAX,
  SENTENCES_IN_DESCRIPTION_MAX,
  SUM_MIN,
  SUM_MAX,
  typeList,
  DEFAULT_PORT,
  HTTP_NOT_FOUND_CODE,
  HTTP_OK_CODE,
};
