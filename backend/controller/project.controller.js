const express = require("express");
const router = express.Router();
const projectService = require("../service/project.service");
const { statusCodes } = require("../constants");
const multer = require("multer");
const { google } = require("googleapis");
const { PassThrough } = require("stream");
const path = require("path");
require("dotenv").config();

// Google Drive API setup
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS), // Service account file
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});
const drive = google.drive({ version: "v3", auth });

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a new project with image upload
const create = async (req, res, next) => {
  const { date, title, description } = req.body;
  let imageId = "";

  if (req.file) {
    try {
      // Create file metadata
      const fileMetadata = {
        name: `${Date.now()}-${req.file.originalname}`,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      };

      // Create a PassThrough stream to upload the buffer
      const bufferStream = new PassThrough();
      bufferStream.end(req.file.buffer);

      const media = {
        mimeType: req.file.mimetype,
        body: bufferStream,
      };

      // Upload the file to Google Drive
      const fileResponse = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, webViewLink, webContentLink",
      });

      // Make the file public
      await drive.permissions.create({
        fileId: fileResponse.data.id,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });

      imageId = fileResponse.data.id;
    } catch (error) {
      return next(error);
    }
  }

  try {
    // Create a new project entry in the database
    await projectService.create({
      date,
      title,
      description,
      image: imageId,
    });
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};

// Get all projects
const getAll = async (req, res, next) => {
  try {
    const projects = await projectService.getAll();
    res.json({ status: "ok", data: projects });
  } catch (error) {
    next(error);
  }
};

// Delete a project by ID
const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    await projectService.deleteProject(id);
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};

// Define routes
router.post("/", upload.single("image"), create);
router.get("/", getAll);
router.delete("/:id", deleteProject);

module.exports = router;
