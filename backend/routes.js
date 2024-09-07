const express = require("express");
const { statusCodes } = require("./constants");
const authController = require("./controller/auth.controller");
const userController = require("./controller/user.controller");
const counterController = require("./controller/counter.controller");
const projectController = require("./controller/project.controller");
const feedbackController = require("./controller/feedback.controller");
const eventController = require("./controller/event.controller");
const router = express.Router();

router.use("/auth", authController);
router.use("/user", userController);
router.use("/counter", counterController);
router.use("/project", projectController);
router.use("/feedback", feedbackController);
router.use("/event", eventController);

router.get("/", (req, res) => {
  res.status(statusCodes.success).json("Welcome to Phoenix Soft Solutions");
});

module.exports = router;
