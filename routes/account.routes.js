const router = require("express").Router();
const Trip = require("../models/Trip.model");
const User = require("../models/User.model");
const Favorite = require("../models/Favorite.model");
const Questionnaire = require("../models/Questionnaire.model");

router.get("/", async (req, res, next) => {
  try {
    const allFavorite = await Favorite.find();
    res
      .status(201)
      .json({ message: "this is all your favorite", Favorite: allFavorite });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { idUser, idVilla } = req.body;
    const newFavorite = await Favorite.create({ idUser, idVilla });
    res.status(201).json({
      message: "Villa booked",
      Favorite: newFavorite,
    });
  } catch (e) {
    next(e);
    console.log("there is a post error");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedFavoite = await Favorite.findByIdAndDelete(req.params.id);
    if (!deletedFavoite) {
      return res.json({ message: "there is no favorite to delete" });
    }
    res.status(201).json({ message: "the favorite is deleted" });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allTrips = await Trip.find();
    res.status(201).json({ message: "this is all your trips", Trip: allTrips });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) {
      return res.json({ message: "there is no trip to delete" });
    }
    res.status(201).json({ message: "the trip is deleted" });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allQuestionnaires = await Questionnaire.find();
    res.status(201).json({
      message: "this is all your questionnaire",
      Questionnaire: allQuestionnaires,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const deletedQuestionnaire = await Questionnaire.findByIdAndDelete(
      req.params.id
    );
    if (!deletedQuestionnaire) {
      return res.json({ message: "there is no questionnaire to delete" });
    }
    res.status(201).json({ message: "the questionnaire is deleted" });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      userId,
      startDate,
      endDate,
      country,
      view,
      idyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOfBedroom,
      services,
    } = req.body;
    const updateQuestionnaire = await Questionnaire.findByIdAndUpdate(
      id,
      {
        name,
        userId,
        startDate,
        endDate,
        country,
        view,
        idyllicStatus,
        numberOfPeople,
        petFriendly,
        numberOfBedroom,
        services,
      },
      { new: true }
    );
    res.status(201).json({
      message: "the questionnaire is updated",
      Questionnaire: updateQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a patch error");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allUser = await User.find();
    res.status(201).json({ message: "there is all the user", User: allUser });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, birthDate, email, phoneNumber, address, password } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, birthDate, email, phoneNumber, address, password },
      { new: true }
    );
    res.status(201).json({
      message: "the user is updated",
      User: updateUser,
    });
  } catch (e) {
    next(e);
    console.log("there is a patch error");
  }
});

module.exports = router;

// affiche delete les favorites
// affiche delete les trips
// affiche patch questionnaires
// user get patch
