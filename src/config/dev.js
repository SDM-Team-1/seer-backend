module.exports.config = {
  username: process.env.MONGO_USER | '',
  password: process.env.MONGO_PASSWORD | '',
  clusterURL: "localhost",
  database: "seer-main",
};