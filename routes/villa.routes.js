const router = require("express").Router();
const Villa = require("../models/Villa.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllVilla = await Villa.find();
    res.status(201).json({
      message: "this is all the villa",
      Villa: findAllVilla,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneVilla = await Villa.findById(id).populate("services");
    res.json({ Villa: oneVilla, message: "this is your villa " });
  } catch (e) {
    next(e);
    console.log("there is an error villa routes 1");
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { bookedDates } = req.body;
    console.log("req body", req.body);
    const patchedVilla = await Villa.findByIdAndUpdate(
      id,
      { $push: { bookedDates } },
      { new: true }
    );
    console.log("patched villa", patchedVilla);
    res.status(200).json({
      message: "we updated the booked dates of the villa",
      patchedVilla,
    });
  } catch (error) {
    console.log("error patching the dates of the villa in villa Routes", error);
  }
});

module.exports = router;
