const router = require("express").Router();
const Villa = require("../models/Villa.model");
const Trip = require("../models/Trip.model");

// call all villa
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

// call one villa
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneVilla = await Villa.findById(id);
    res.json({ Villa: oneVilla, message: "this is your villa " });
  } catch (e) {
    next(e);
    console.log("there is an error");
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const { startDate, endDate, idVilla, idUser } = req.body;
    const oneTrip = await Trip.create({
      startDate,
      endDate,
      idVilla: id,
      idUser,
    });
    res.status(201).json({
      Trip: oneTrip,
      message: "this is your trip",
    });
  } catch (e) {
    next(e), console.log("there is an error");
  }
});

module.exports = router;
