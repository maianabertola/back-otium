const router = require("express").Router();
const Booking = require("../models/Booking.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllBook = await Booking.find();
    res.status(201).json({
      message: "there is all villa",
      Booking: findAllBook,
    });
  } catch (e) {
    next(e);
    console.log("there is an error");
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
    console.log("there is an error");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBook = await Booking.findByIdAndDelete(id);
    res.status(201).json({ message: "book deleted", Booking: deleteBook });
  } catch (e) {
    next(e);
    console.log("there is an error");
  }
});

module.exports = router;
