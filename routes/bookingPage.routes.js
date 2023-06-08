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
    console.log("there is when getting the booking from bookingPageroutes", e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //enlevé temporairement le pet property
    const { numberOfPeople, message, userId, villaId, bookedDates } = req.body;
    const newBook = await Booking.create({
      numberOfPeople,
      message,
      userId,
      villaId,
      bookedDates,
    });
    res.status(201).json({
      message: "Villa booked",
      Booking: newBook,
    });
  } catch (e) {
    next(e);
    console.log(
      "there is an error when creating a booking from bookingPageroutes",
      e
    );
  }
});

//find the bookings made by one user
router.get("/created", async (req, res, next) => {
  try {
    const getBookingsOfTheUser = await Booking.find({
      userId: req.user._id,
    })
      .sort({
        bookedDates: -1,
      })
      .populate("villaId");
    res.status(201).json({
      message: "this is the bookings made by the user",
      Booking: getBookingsOfTheUser,
    });
  } catch (error) {
    console.log(
      "there is an error when getting the bookings made by the user in the bookingPage routes",
      error
    );
  }
});

// user delete one booking
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: "Booking deleted", Booking: deletedBooking });
  } catch (e) {
    next(e);
    console.log(
      "there is an error when deleting a booking from bookingPageroutes",
      e
    );
  }
});

// user can edit one booking

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const patchedBooking = await Booking.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Booking updated", Booking: patchedBooking });
  } catch (error) {
    console.log(
      "there is an error when patching a booking from bookingPageroutes",
      error
    );
  }
});

//find a booking by ID
router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookingId = id.substring(1);
    const getOneBookingById = await Booking.findById(bookingId).populate(
      "villaId"
    );
    res.status(201).json({
      message: "this is the bookings made by the user",
      Booking: getOneBookingById,
    });
  } catch (error) {
    console.log(
      "there is an error when getting the bookings made by the user in the bookingPage routes",
      error
    );
  }
});

module.exports = router;
