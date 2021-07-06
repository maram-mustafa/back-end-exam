"use strict";

const favModal = require("../Collections/Fav");

function addFavHandler(req, res) {
  const { name, url } = req.body;

  // console.log(req.body)
  favModal.find({name }, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      if (data.length == 0) {
        const newFav = new favModal({
          name,
          url,
        });
        // console.log(newFav)
        newFav.save();

      } else {
        console.log("Poki exist");
      }
    }
  });
}

module.exports = addFavHandler;
