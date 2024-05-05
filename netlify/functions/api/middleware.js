const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const setupMiddleware = (api) => {
  api.use(bodyParser.json());
  api.use(cors({
    origin: 'richard-senyo.netlify.app/', // Specify your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));
};

module.exports = setupMiddleware;

