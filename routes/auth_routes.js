const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth_controller");
const passport = require("passport");

router.post(
  "/login", 
  passport.authenticate('local', {
    session: false
  }), 
  AuthController.login
);

router.post(
  "/register", 
  AuthController.register
);

module.exports = router;