const express = require("express");
const { statusCodes } = require("./constants");
const authController = require("./controller/auth.controller");
const userController = require("./controller/user.controller");
const router = express.Router();

router.use("/auth", authController);
router.use("/user", userController);

router.get("/", (req, res) => {
  res.status(statusCodes.success).json("Welcome Xcrop");
});

module.exports = router;
