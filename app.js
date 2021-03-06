const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("./config/passport");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

app.use(require("./routes/auth_routes.js"));

module.exports = app;


