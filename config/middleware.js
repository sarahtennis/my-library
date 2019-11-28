const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const testRouter = require("../routers/testRouter.js");
const usersRouter = require("../routers/usersRouter.js");
const accountSettingsRouter = require('../routers/accountSettingsRouter.js');
const accountDetailsRouter = require('../routers/accountDetailsRouter.js');

module.exports = server => {
  // middleware
  server.use(express.json());
  server.use(cors());
  server.use(helmet());

  // express routers
  server.use("/test", testRouter);
  server.use("/api/users", usersRouter);
  server.use("/api/accountSettings", accountSettingsRouter);
  server.use("/api/accountDetails", accountDetailsRouter);
};
