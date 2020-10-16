/* eslint-disable no-console */
// eslint-disable implicit-arrow-linebreak
import mongoose from 'mongoose';
import envConfig from '../config/index';

const connect = (url = envConfig.dbUrl, opts = {}) => {
  console.debug(`Connecting to ${url}`);
  console.debug('NODE_ENV', process.env.NODE_ENV);
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

export default connect;
