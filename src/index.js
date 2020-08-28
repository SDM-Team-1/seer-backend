/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ silent: true });

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const clusterURL = "seer-mongo-main.ds0vt.mongodb.net";
const database = "seer-main";

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to server at", new Date().toISOString());
});

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const uri = `mongodb+srv://${username}:${password}@${clusterURL}/${database}?retryWrites=true&w=majority&replicaSet=atlas-o0cppa-shard-0&readPreference=primary`;
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((_err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
