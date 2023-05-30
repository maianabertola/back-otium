const router = require("express").Router();
//ajouter des models
const Questionnaire = require("../models/Questionnaire.model");

router.get("/questionnaire", async (req, res, next) => {
  try {
    const findAllQuestionnaire = await Questionnaire.find();
    res.status(201).json({
      message: "u have all questionnaire",
      Questionnaire: findAllQuestionnaire,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/questionnaire", async (req, res, next) => {
  try {
    const {
      userId,
      startDate,
      endDate,
      country,
      View,
      idylicStatus,
      numberPeoples,
      petFriendly,
      numberBedrooms,
      services,
    } = req.body;
    const newQuestionnaire = await Questionnaire.create({
      userId,
      startDate,
      endDate,
      country,
      View,
      idylicStatus,
      numberPeoples,
      petFriendly,
      numberBedrooms,
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

router.delete("/questionnaire/:id", async (req, res, next) => {
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

module.exports = router
