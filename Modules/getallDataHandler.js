"use strict";
const axios = require("axios");

function getallDataHandler(req, res) {
  const url = "https://pokeapi.co/api/v2/pokemon";

  axios
    .get(url)
    .then((response) => {
        res.send(response.data.results)

    })
    .catch((err) => {
      res.status(500).send("btata");
    });
}

module.exports = getallDataHandler;
