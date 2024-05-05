// server.js
const express = require("express");
const serverless = require("serverless-http");
const setupMiddleware = require("./middleware");
const setupRoutes = require("./routes");

const api = express();
const router = express.Router();

// Setup middleware
setupMiddleware(api);

// Setup routes
setupRoutes(router);

// Mounting the router at the specified path
api.use("/.netlify/functions/api", router);

module.exports = api;
module.exports.handler = serverless(api);

