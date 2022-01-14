const express = require("express");
const routes = require("./router/router.js");
require('dotenv').config();
const mongoose = require("./config/database.js");




const app = express();

const port = process.env.APP_PORT;




app.use(express.json());
app.use("/", routes);


module.exports=  app.listen(port, (err) => {
    if (err) {
        console.log("Cannot start server 2000", err);
    } else {
        console.log("Sucessfully Started Server 2000");
    }
})