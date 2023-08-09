const router = require("express").Router();
const User = require("../models/User.model");
const Favorite = require("../models/Favorite.model");
const Questionnaire = require("../models/Questionnaire.model");

//THE PREFIX IS /account
//route to find all the favorite villas
router.get("/", async (req, res, next) => {
  try {
    const allFavorite = await Favorite.find();
    res.status(201).json({
      message: "this is all your favorite villas",
      Favorite: allFavorite,
    });
  } catch (e) {
    console.log("there is an error when retrieving all the favorite villas", e);
  }
});

//route to create a new favorite
router.post("/", async (req, res, next) => {
  try {
    const { idUser, idVilla } = req.body;
    const newFavorite = await Favorite.create({ idUser, idVilla });
    res.status(201).json({
      message: "Villa booked",
      Favorite: newFavorite,
    });
  } catch (e) {
    console.log("there is an error when fav a villa", e);
  }
});

//route to delete a favorite villa
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedFavorite = await Favorite.findByIdAndDelete(req.params.id);
    if (!deletedFavorite) {
      return res.json({ message: "there is no favorite to delete" });
    }
    res.status(201).json({ message: "the favorite is deleted" });
  } catch (e) {
    console.log("there is an error when deleting the favorite villa", e);
  }
});

//Route to delete a questionnaire from the user account
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
    console.log("there is an error when deleting a questionnaire", e);
  }
});

//Route to patch the questionnaire from the user account
router.patch("/:id", async (req, res) => {
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
    console.log("there is an error when patching a questionnaire", e);
  }
});

//Route to patch the info of the user
router.patch("/user/:id", async (req, res) => {
  try {
    console.log("Attempting to patch user");
    const { id } = req.params;
    const { name, surname, birthDate, email, phoneNumber, address, country } =
      req.body;
    console.log("req body", req.body);
    console.log(
      "values",
      name,
      surname,
      birthDate,
      email,
      phoneNumber,
      address,
      country
    );
    console.log("id", id);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          surname,
          birthDate,
          email,
          phoneNumber,
          address,
          country,
        },
      },
      { new: true }
    );
    res.status(201).json({
      message: "the user has been updated",
      User: updatedUser,
    });
  } catch (e) {
    console.log("there is an error when patchin user info", e);
  }
});

module.exports = router;
