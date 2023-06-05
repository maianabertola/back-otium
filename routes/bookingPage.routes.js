const router = require("express").Router();
const Booking = require("../models/Booking.model");
const Trip = require("../models/Trip.model");

//the prefix is /booking
router.get("/", async (req, res, next) => {
  try {
    const findAllBook = await Booking.find();
    res.status(201).json({
      message: "this is your booking collection",
      Booking: findAllBook,
    });
  } catch (e) {
    next(e);
    console.log("there is an error booking page");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { numberOfPeople, pet, message, userId, villaId } = req.body;
    const newBook = await Booking.create({
      numberOfPeople,
      pet,
      message,
      userId,
      villaId,
    });
    res.status(201).json({
      message: "Villa booked",
      Booking: newBook,
    });
  } catch (e) {
    next(e);
    console.log("there is an error booking page routes");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBook = await Booking.findByIdAndDelete(id);
    res.status(201).json({ message: "book deleted", Booking: deleteBook });
  } catch (e) {
    next(e);
    console.log("there is an error bkp");
  }
});

//testing the trip

router.post("/trip", async (req, res, next) => {
  try {
    const { startDate, endDate, idVilla, idUser } = req.body;
    const createTrip = await Trip.create({
      startDate,
      endDate,
      idVilla,
      idUser,
    });
    res.status(201).json({
      message: "Trip is created",
      createTrip,
    });
  } catch (error) {
    console.log(error, "there's an issue when creatingtrip, bookingPageroutes");
  }
});

module.exports = router;
