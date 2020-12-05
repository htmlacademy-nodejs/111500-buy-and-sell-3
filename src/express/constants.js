'use strict';

const API_PORT = `3000`;
const API_TIMEOUT = 1000;
const DEFAULT_API_URL = `http://localhost:${API_PORT}/api`;
const API_BASE_URL = process.env.BASE_URL || DEFAULT_API_URL;

module.exports = {API_PORT, API_TIMEOUT, DEFAULT_API_URL, API_BASE_URL};
