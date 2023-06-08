const router = require("express").Router();
const Villa = require("../models/Villa.model");
const Trip = require("../models/Trip.model");

// call all villa
router.get("/", async (req, res, next) => {
  // console.log("kikoo");
  try {
    const findAllVilla = await Villa.find();
    // console.log(findAllVilla);
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
    const oneVilla = await Villa.findById(id).populate("services");
    res.json({ Villa: oneVilla, message: "this is your villa " });
    // const services = await Villa.findById(id).populate("services");
    // res.json({ message: "les services sont:", services, oneVilla });
  } catch (e) {
    next(e);
    console.log("there is an error villa routes 1");
  }
});

// router.post("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { startDate, endDate, idVilla, idUser } = req.body;
//     const oneTrip = await Trip.create({
//       startDate,
//       endDate,
//       idVilla: id,
//       idUser,
//     });
//     res.status(201).json({
//       Trip: oneTrip,
//       message: "this is your trip",
//     });
//   } catch (e) {
//     next(e), console.log("there is an error villa routes 2");
//   }
// });

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { bookedDates } = req.body;
    const patchedVilla = await Villa.findByIdAndUpdate(
      id,
      {
        bookedDates,
      },
      { new: true }
    );
    res
      .status(200)
      .json({
        message: "we updated the booked dates of the villa",
        patchedVilla,
      });
  } catch (error) {
    console.log("error patching the dates of the villa in villa Routes", error);
  }
});

module.exports = router;
