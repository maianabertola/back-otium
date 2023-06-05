const router = require("express").Router();
const Questionnaire = require("../models/Questionnaire.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllQuestionnaire = await Questionnaire.find();
    res.status(201).json({
      message: "this is all questionnaires",
      findAllQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/", async (req, res, next) => {
  console.log("Hello from POST Questionnaire");
  try {
    const {
      name,
      userId,
      startDate,
      endDate,
      pickedCountry,
      pickedView,
      pickedIdyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOFBedroom,
      pickedServices,
    } = req.body;
    const newQuestionnaire = await Questionnaire.create({
      name,
      userId,
      startDate,
      endDate,
      pickedCountry,
      pickedView,
      pickedIdyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOFBedroom,
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
      deleteQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router;
