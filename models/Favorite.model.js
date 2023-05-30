const { model, Schema } = require("mongoose");

const favoriteSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  idVilla: {
    type: Schema.Types.ObjectId,
    ref: "Villa",
  },
});

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
