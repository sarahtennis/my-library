require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const configureMiddleware = require("../config/middleware.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

module.exports = server;
