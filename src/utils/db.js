const mongoose = require("mongoose");
const envConfig = require("../config/index");

const connect = (url = envConfig.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};

module.exports.connect = connect;
