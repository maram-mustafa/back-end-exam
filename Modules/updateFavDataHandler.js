"use strict";

const favModal = require("../Collections/Fav");

function updateFavDataHandler(req, res) {
  const { name, url, target } = req.body;

  favModal.updateOne({ name: target },{ $set: { name: name, url: url } },(err, data) => {
      favModal.find({}, (err, data) => {
        if (err) {
          res.status(500).send("there is an error");
        } else {
          res.send(data);
        }
      });
    }
  );
}

module.exports = updateFavDataHandler;
