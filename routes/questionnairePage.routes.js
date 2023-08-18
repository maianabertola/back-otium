const router = require("express").Router();
const Questionnaire = require("../models/Questionnaire.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllQuestionnaire = await Questionnaire.find().sort({
      createdAt: -1,
    });
    res.status(201).json(findAllQuestionnaire);
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const findOneQuestionnaire = await Questionnaire.findById(_id);
    res.status(201).json({
      message: "this is the questionnaire",
      findOneQuestionnaire,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  console.log("Hello from POST Questionnaire");
  try {
    const {
      name,
      userId,
      pickedCountry,
      pickedView,
      pickedIdyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOfBedroom,
      pickedServices,
    } = req.body;
    const newQuestionnaire = await Questionnaire.create({
      name,
      userId,
      pickedCountry,
      pickedView,
      pickedIdyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOfBedroom,
      pickedServices,
    });
    res.status(201).json({
      message: "Questionnaire added",
      newQuestionnaire,
    });
  } catch (e) {
    next(e), console.log("there is a post error");
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteQuestionnaire = await Questionnaire.findByIdAndDelete(id);
    res.status(201).json({
      message: "the questionnaire is deleted",
    });
  } catch (e) {
    next(e);
    console / log("there is a delete error");
  }
});

router.patch("/:id", async (req, res, next) => {
  console.log("je suis dans le patch");
  try {
    const { id } = req.params;
    const {
      name,
      pickedCountry,
      pickedView,
      pickedIdyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOfBedroom,
      pickedServices,
    } = req.body;
    const updateQuestionnaire = await Questionnaire.findByIdAndUpdate(
      id,
      {
        name,
        pickedCountry,
        pickedView,
        pickedIdyllicStatus,
        numberOfPeople,
        petFriendly,
        numberOfBedroom,
        pickedServices,
      },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "the questionnaire is updated", updateQuestionnaire });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router;
