const router = require("express").Router();
const User = require("../models/User.model");

router.get("/", async (req, res, next) => {
  try {
    const findAllUsers = await User.find();
    res.status.json({
      message: "this is all Users",
      findAllUsers,
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
      birthDate,
      email,
      phoneNumber,
      password,
    } = req.body;
    const newUser = await User.create({
      name,
      birthDate,
      email,
      phoneNumber,
      password,
    });
    res.status(201).json({
        message: "new user",
        newUser,
    })
  } catch (e) {
    next(e), console.log("there is a post error");
  }
});

module.exports = router;
