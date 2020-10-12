// eslint-disable implicit-arrow-linebreak
// eslint-disable no-console
import mongoose from 'mongoose';
import envConfig from '../config/index';

const connect = (url = envConfig.dbUrl, opts = {}) => {
  // eslint-disable-next-line no-console
  console.debug(`Connecting to ${url}`);
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};

export default connect;
