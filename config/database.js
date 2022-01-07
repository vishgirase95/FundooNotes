const mongoose = require("mongoose");

const URL = process.env.DATABASE;

const DataBase = () => {
  mongoose
    .connect(URL, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to datbase");
    })
    .catch((er) => {
      console.log("error in datbase", er);
    });
};

module.exports = DataBase();
