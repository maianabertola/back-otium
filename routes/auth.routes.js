const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const salt = 10;

router.post("/signup", async (req, res, next) => {
  const {
    name,
    birthDate,
    email,
    phoneNumber,
    address,
    country,
    password,
    postalCode,
  } = req.body;
  if (!name || !birthDate || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: "missing informations" });
  }
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ message: "this email is already used" });
    }
    const generatedSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, generatedSalt);

    const newUser = {
      name,
      birthDate,
      email,
      phoneNumber,
      address,
      country,
      password: hashedPassword,
      postalCode,
    };
    const createdUser = await User.create(newUser);
    res.status(201).json({ message: "new user created", User: createdUser });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  const foundUser = {
    name,
    birthDate,
    email,
    phoneNumber,
    address,
    country,
    password,
    postalCode,
  } = req.body;
  if (!name || !birthDate || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: "missing informations" });
  }
  const matchPassword = await bcrypt.compare(password, foundUser._id)
  res.status(201).json({ message: "this is the user", findONeUser });
});

module.exports = router;
