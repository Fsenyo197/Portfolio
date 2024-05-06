const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const setupMiddleware = (api) => {
  api.use(bodyParser.json());
  api.use(cors({
    origin: 'https://richard-senyo.netlify.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));
};

module.exports = setupMiddleware;
