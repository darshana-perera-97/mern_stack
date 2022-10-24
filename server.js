const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;

//connect mongodb
mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.uoooe.mongodb.net/dsitems?retryWrites=true&w=majority"
);

//data schemas
const itemSchema = {
  title: String,
  description: String,
};

//data models

//read route

// create route

//delete route

//update route

app.listen(port, function () {
  console.log("Express is running");
});
