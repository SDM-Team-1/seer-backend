/* eslint-disable no-console */
const express = require('express');
const { environmentConfig: envConfig } = require('./config/index');
const { connect } = require('./utils/db');

const app = express();

const start = async () => {
  try {
    await connect(envConfig.dbURI);
    app.listen(envConfig.port, () => {
      console.log(`REST API on http://localhost:${envConfig.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
