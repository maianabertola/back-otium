const router = require("express").Router();
const Villa = require("../models/Villa.model");

router.get("/villa", async (req, res, next) => {
  try {
    const findAllVilla = await Villa.find();
    res.status(201).json({
      message: "this is the villas",
      Villa: findAllVilla,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

module.exports = router
