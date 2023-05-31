const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const isAuthenticated = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: "token not found" });
  }
  token = token.replace("bearer ", "");
  const userToken = jwt.verify(token, process.env.TOKEN_SECRET);
  try {
    const user = await User.findOne({ username: userToken.username });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "wrong credential" });
  }
};

// faire un admin
module.exports = isAuthenticated;
