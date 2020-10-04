/* eslint-disable no-console */
import express from 'express';
import envConfig from './config/index';
import connect from './utils/db';

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
