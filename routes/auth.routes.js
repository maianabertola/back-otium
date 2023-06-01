const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const salt = 10;
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middleware/middlewares");

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

// router.get("/user", async (req, res, next) => {
//   try {
//     const allUsers = await User.find();
//     res.json(allUsers);
//   } catch (e) {
//     next(e);
//   }
// });

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "missing informations" });
    }
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "Wrong credential" });
    }
    const matchPassword = await bcrypt.compare(password, foundUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Wrong credential" });
    }
    const payload = { _id: foundUser._id, email };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "12h",
    });

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
