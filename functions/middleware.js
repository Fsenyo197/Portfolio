const express = require("express");
const bodyParser = require("body-parser");

const setupMiddleware = (api) => {
  api.use(bodyParser.json());
  api.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://richard-senyo.netlify.app");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
};

module.exports = setupMiddleware;
