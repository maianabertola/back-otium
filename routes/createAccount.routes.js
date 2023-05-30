const router = require("express").Router();
const User = require("../models/User.model");

router.get("/login", async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.json({
      message: "there is all users",
      User: allUsers,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const {
      name,
      birthDate,
      email,
      phoneNumber,
      address,
      country,
      postalCode,
    } = req.body;
    const newAccount = await User.create({
      name,
      birthDate,
      email,
      phoneNumber,
      address,
      country,
      postalCode,
    });
    res.status(201).json({
      message: "New Account",
      User: newAccount,
    });
  } catch (e) {
    next(e), console.log("there is a post error");
  }
});

router.delete("/login/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(201).json({
      message: "the user is deleted",
      User: deleteUser,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router
