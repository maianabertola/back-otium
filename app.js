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
// const bookPage = require("./routes/bookingPage.routes");
// const favoriPage = require("./routes/favoritesPage.routes");
// const loginPage = require("./routes/createAccount.routes");
// const questionnairePage = require("./routes/questionnairePage.routes");
const servicesPage = require("./routes/servicesPage.routes")
// const service = require("./")
app.use("/api", indexRoutes);
// app.use("/", bookPage);
// app.use("/", favoriPage);
// app.use("/", loginPage);
// app.use("/", questionnairePage);
app.use("/service", servicesPage);
// app.use("/", )

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
