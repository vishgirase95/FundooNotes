const mongoose = require("mongoose");

const URL = process.env.DATABASE;

const DataBase = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to datbase");
    })
    .catch((er) => {
      console.log("error in datbase", er);
    });
};

module.exports = DataBase();
