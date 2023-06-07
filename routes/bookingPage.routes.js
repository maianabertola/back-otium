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

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBook = await Booking.findByIdAndDelete(id);
    res.status(201).json({ message: "book deleted", Booking: deleteBook });
  } catch (e) {
    next(e);
    console.log(
      "there is an error when deleting a booking from bookingPageroutes",
      e
    );
  }
});

router.get("/created", async (req, res, next) => {
  try {
    const getBookingsOfTheUser = await Booking.find({
      userId: req.user_id,
    }).sort({
      bookedDates: -1,
    });
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
// route.delete("/:id") -> récupérer l'iD

//testing the trip
// router.post("/trip", async (req, res, next) => {
//   try {
//     const { startDate, endDate, idVilla, idUser } = req.body;
//     const createTrip = await Trip.create({
//       startDate,
//       endDate,
//       idVilla,
//       idUser,
//     });
//     res.status(201).json({
//       message: "Trip is created",
//       createTrip,
//     });
//   } catch (error) {
//     console.log(error, "there's an issue when creatingtrip, bookingPageroutes");
//   }
// });

module.exports = router;
