/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import envConfig from './config/index';
import connect from './utils/db';
import article from './resources/article/article.router';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/article', article);

const start = async () => {
  try {
    await connect(envConfig.dbURI, { useUnifiedTopology: true });
    app.listen(envConfig.port, () => {
      console.log(`REST API on http://localhost:${envConfig.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
