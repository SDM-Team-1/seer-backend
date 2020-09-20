const mongoose = require('mongoose');
const envConfig = require('../config/index');

const connect = (url = envConfig.dbUrl, opts = {}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  mongoose.connect(url, { ...opts, useNewUrlParser: true });

module.exports.connect = connect;
