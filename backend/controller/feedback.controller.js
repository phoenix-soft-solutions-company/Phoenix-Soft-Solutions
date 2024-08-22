const express = require("express");
const router = express.Router();
const feedbackService = require("../service/feedback.service");
const { error, success, statusCodes } = require("../constants");
const multer = require("multer");
const { uploadImageToDrive } = require("../utils/drive.upload");

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const create = async (req, res, next) => {
  const { name, feedback } = req.body;
  let imageId = "";

  try {
    if (req.file) {
      imageId = await uploadImageToDrive(req.file);
    }

    // Create a new project entry in the database
    await feedbackService.create({
      name,
      feedback,
      image: imageId,
    });

    return res.status(statusCodes.created).json(success.feedbackCreated);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const feedbacks = await feedbackService.getAll();
    return res.status(statusCodes.success).json({ data: feedbacks });
  } catch (error) {
    next(error);
  }
};

const deleteFeedback = async (req, res, next) => {
  const { id } = req.params;
  try {
    await feedbackService.deleteFeedback(id);

    return res.status(statusCodes.success).json(success.feedbackDeleted);
  } catch (error) {
    next(error);
  }
};

// Define routes
router.post("/", upload.single("image"), create);
router.get("/", getAll);
router.delete("/:id", deleteFeedback);

module.exports = router;
