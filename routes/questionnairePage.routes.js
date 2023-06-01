const router = require("express").Router();
const Questionnaire = require("../models/Questionnaire.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllQuestionnaire = await Questionnaire.find();
    res.status(201).json({
      message: "this is all questionnaires",
      Questionnaire: findAllQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      name,
      startDate,
      endDate,
      country,
      view,
      idyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOFBedroom,
      services,
    } = req.body;
    const newQuestionnaire = await Questionnaire.create({
      name,
      userId: req.user._id,
      startDate,
      endDate,
      country,
      view,
      idyllicStatus,
      numberOfPeople,
      petFriendly,
      numberOFBedroom,
      services,
    });

    res.status(201).json({
      message: "Questionnaire added",
      Questionnaire: newQuestionnaire,
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
      Questionnaire: deleteQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router;
