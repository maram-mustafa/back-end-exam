"use strict";

const favModal = require("../Collections/Fav");

function deleteFavDataHandler(req, res) {
  let name = req.params.name;
  // console.log(name)

  favModal.deleteOne({ name }, (err, data) => {
    // console.log(data);
    favModal.find({}, (err, data) => {
      if (err) {
        res.status(500).send("there is an error");
      } else {
        res.send(data);
      }
    });
  });
}

module.exports = deleteFavDataHandler;
