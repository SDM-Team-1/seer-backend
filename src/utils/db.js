import mongoose from 'mongoose';
import envConfig from '../config/index';

const connect = (url = envConfig.dbUrl, opts = {}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  mongoose.connect(url, { ...opts, useNewUrlParser: true });

export default connect;
