"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const server = express();
server.use(express.json());

server.use(cors());

const getallDataHandler = require("./Modules/getallDataHandler");
const addFavHandler = require("./Modules/addFavHandler");
const getFavDataHandler = require("./Modules/getFavDataHandler");
const deleteFavDataHandler = require("./Modules/deleteFavDataHandler");
const updateFavDataHandler = require("./Modules/updateFavDataHandler");

const PORT = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGODB_URI}/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.get("/allData", getallDataHandler);

server.post("/addFav", addFavHandler);

server.get("/getFavData", getFavDataHandler);

server.delete("/deleteFavData/:name", deleteFavDataHandler);

server.put("/updateFavData", updateFavDataHandler);

//localhost:3001
server.get("/", (req, res) => {
  res.send("Home");
});

server.get("*", (req, res) => {
  res.status(404).send("not found");
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
