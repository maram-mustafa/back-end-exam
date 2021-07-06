"use strict";

const mongoose = require("mongoose");

//schems
const favPoki = new mongoose.Schema({
  name: String,
  url: String,
});

//Modal
const Fav = mongoose.model("favPoki", favPoki);

module.exports = Fav;
