const express = require("express");
const { statusCodes } = require("./constants");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(statusCodes.success).json("Welcome Xcrop");
});

module.exports = router;
