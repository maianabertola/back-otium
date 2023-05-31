const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const isAuthenticated = require("../middleware/middlewares")
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
    try {
        const { name, password } = req.body;
      if (!name || !password) {
        return res.status(400).json({ message: "missing informations" });
      }
    const foundUser = await User.findOne({ name }).select("name password");
    if (!foundUser) {
      return res.status(400).json({ message: "wrong " });
    }

    const matchingPassword = await bcrypt.compare(password, foundUser.password);
    if (!matchingPassword) {
      return res.status(400).json({ message: "wrong credentials" });
    }

    const payload = { name: foundUser.name, _id: foundUser._id };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "3h",
    });

    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
});

router.get("/verify", isAuthenticated, async (req, res, next) => {
    try {
        res.json(req.user)
    } catch(e) {
        res.json({message: "the authentification is wrong"})
    }
})

module.exports = router;