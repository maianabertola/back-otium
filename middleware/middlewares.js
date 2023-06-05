const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const isAuthenticated = async (req, res, next) => {
  let token = req.headers.authorization;
  console.log(req.headers);
  if (!token) {
    return res.status(400).json({ message: "token not found" });
  }
  token = token.replace("Bearer ", "");
  const userToken = jwt.verify(token, process.env.TOKEN_SECRET);
  try {
    const user = await User.findOne({ email: userToken.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: e });
  }
};

// faire un admin
module.exports = isAuthenticated;
