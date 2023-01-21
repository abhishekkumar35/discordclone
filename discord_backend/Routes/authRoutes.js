const express = require("express");
const authControllers = require("../Controllers/RouteControllers");
const verifyToken = require("../Middleware/Auth");
const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const router = express.Router();

const registerSchema = joi.object({
  username: joi.string().min(3).max(20).required(),
  password: joi.string().min(6).max(16).required(),
  mail: joi.string().email().required(),
});

const loginSchema = joi.object({
  mail: joi.string().email().required(),
  password: joi.string().min(6).max(16).required(),
});

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.loginController
);
router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.registerController
);

router.get("/test", verifyToken, (req, res) => {
  res.status(200).send("auth passed");
});

module.exports = router;
