require("dotenv").config();
require("../db/index");
const Favorite = require("../models/Favorite.model");

const favorites = {
  idUser: "647a12fafd915adfb80fcc74",
  favoriteVillas: ["647ee58f52334df28439b14a", "647ee58f52334df28439b14f"],
};

async function seed() {
  try {
    await Favorite.deleteMany();
    await Favorite.create(favorites);
    console.log("create all the favorites", favorites);
    process.exit();
  } catch (error) {
    console.log("there is an error favorite seed", error);
  }
}

seed();
