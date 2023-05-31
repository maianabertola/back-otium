const router = require("express").Router();
const Favorite = require("../models/Favorite.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllFavorite = await Favorite.find();
    res.status(201).json({
      message: "you have all favorite",
      Favorite: findAllFavorite,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { idUser, idVilla } = req.body;
    const newFavorite = await User.create({
      idUser,
      idVilla,
    });
    res.status(201).json({
      message: "favorite added",
      Favorite: newFavorite,
    });
  } catch (e) {
    next(e), console.log("there is a post error");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteFavorite = await Favorite.findByIdAndDelete(id);
    res.status(201).json({
      message: "the favorite is deleted",
      Favori: deleteFavorite,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router
