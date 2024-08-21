const express = require("express");
const router = express.Router();
const projectService = require("../service/project.service");
const { error, success, statusCodes } = require("../constants");
const multer = require("multer");
const { uploadImageToDrive } = require("../utils/drive.upload");

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const create = async (req, res, next) => {
  const { date, title, description } = req.body;
  let imageId = "";

  try {
    if (req.file) {
      imageId = await uploadImageToDrive(req.file);
    }

    // Create a new project entry in the database
    await projectService.create({
      date,
      title,
      description,
      image: imageId,
    });

    return res.status(statusCodes.created).json(success.projectCreated);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const projects = await projectService.getAll();
    return res.status(statusCodes.success).json({ data: projects });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await projectService.deleteProject(id);

    return res.status(statusCodes.success).json(success.projectDeleted);
  } catch (error) {
    next(error);
  }
};

// Define routes
router.post("/", upload.single("image"), create);
router.get("/", getAll);
router.delete("/:id", deleteProject);

module.exports = router;
