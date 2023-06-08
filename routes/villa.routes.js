const router = require("express").Router();
const Villa = require("../models/Villa.model");
const Trip = require("../models/Trip.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllVilla = await Villa.find();
    res.status(201).json({
      message: "this is all the villa",
      Villa: findAllVilla,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneVilla = await Villa.findById(id).populate("services");
    res.json({ Villa: oneVilla, message: "this is your villa " });
  } catch (e) {
    next(e);
    console.log("there is an error villa routes 1");
  }
});

module.exports = router;
