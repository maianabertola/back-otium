// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
const services = require("./routes/servicesPage.routes");
const villa = require("./routes/villa.routes");
const authentification = require("./routes/auth.routes");
const favorite = require("./routes/favoritesPage.routes");
const questionnaire = require("./routes/questionnairePage.routes");
const booking = require("./routes/bookingPage.routes");
const isAuthenticated = require("./middleware/middlewares");
const account = require("./routes/account.routes");
const signup = require("./routes/signupPage.routes");

app.use("/api", indexRoutes);
app.use("/signup", signup);
app.use("/villa", villa);
app.use("/service", services);
app.use("/auth", authentification);
app.use(isAuthenticated);
app.use("/account", account);
app.use("/favorite", favorite);
app.use("/questionnaire", questionnaire);
app.use("/booking", booking);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
