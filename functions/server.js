const express = require("express");
const serverless = require("serverless-http");
const setupMiddleware = require("./middleware");
const setupRoutes = require("./routes");

const api = express();
const router = express.Router();

setupMiddleware(api);

setupRoutes(router);

// Mounting the router at the specified path
api.use("/", router);

module.exports = api;
module.exports.handler = serverless(api);

