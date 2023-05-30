const router = require("express").Router();
const Favori = require("../models/Favorite.model");

router.get("/favori", async (req, res, next) => {
  try {
    const findAllFavori = await Favori.find();
    res.status(201).json({
      message: "u have all favori",
      Favori: findAllFavori,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/favori", async (req, res, next) => {
  try {
    const { idUser, idVilla } = req.body;
    const newFavori = await User.create({
      idUser,
      idVilla,
    });
    res.status(201).json({
      message: "favori added",
      Favori: newFavori,
    });
  } catch (e) {
    next(e), console.log("there is a post error");
  }
});

router.delete("/favori/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteFavori = await Favori.findByIdAndDelete(id);
    res.status(201).json({
      message: "the favori is deleted",
      Favori: deleteFavori,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router
