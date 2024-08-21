const express = require("express");
const router = express.Router();
const projectService = require("../service/project.service");
const { error, success, statusCodes } = require("../constants");
const multer = require("multer");
const { google } = require("googleapis");
const { PassThrough } = require("stream");
const path = require("path");
require("dotenv").config();

// Google Drive API setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: "x-planet-433214-k7",
    private_key_id: "6764f136324e313ae35b0238d36c99d06f5bebe3",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmXYiR1nH2HxhA\naO6UaL/pUIuL3qzJH9+EqsszsNhPgxY8h8gz6sDH+uLHGFYHNTS9xU9sRsZKoNH4\nL0Njqvop0u3bqs1xC3udPrZdJj3qThHzLy69XuTTUgMbJQWXucK3FdXjdEJPyXq/\ngK+rjNXaHphA+awz8mf+RtvvaAjqnxMi8JkLJZvZFWUhDsUvEmKvZunmp9WBMPvg\nCqvHocaAARXU55rjDoFMWlXT9wRcjCcYxNzjjkG6CxZxW7WnFHviMRAjx4gWh5zq\n0xqvbwf4wk1W+fEtFZDngRl71zDrOm+fFl43BvqNVOQ9YiDzadGyznajgyMIfUTy\nUzVvBCA7AgMBAAECggEAAf9vi2jK14zKCsP30Xpsi423D0fuRUAHvB0c8ZL3FgVZ\n+AIdalowVHZz0LY/GjkOWBUNfhxfdzf1LYjLw1+jP2tUBeZIL0pXAq1lHTs/VRf4\n6TWw1v9TuiHq/aF1LrxBVVeCyQd1YGXn/nK6KVI4ozTo2SbmZX1MuGX7cCWMrdyU\nLCi/8ZiH+I+iKJvMNfQhSgU8b3sZib+/YqO5WFnLxQBgOZoMC6OVSPcr6pdF6BHZ\ns/95aHJQcmUIp+6vSiHIXEMrsQZ2hRSmRlRqGi/xOa5EK3Chy101pCjaoY8tyWjJ\nI1rrrTCzKQN85J8VUwT38d++WvANTrAu7d8QyWUuOQKBgQDqSV8uBysQA2SdQile\n/OKKSt+ucpYI86z/hO5FoBchTrb5ejMijZfmx1PsKsrIIsYVR25cJ0tcnlC/nveM\nVHYbjVTm93wm4BmYzINkm7IOoddOplOnL5NafD8ynlOG9LRJ0uIX/u/VdYCSX0t9\nP6vIvZA5BRCDU0yj7A5YZD8FHQKBgQC1yK2vNpGeq9t8ABbmw83a8i6bLfV+NUUp\ncdhrVa+wUXIMGOihbAdhaodDrf2OvJ4iIaA18gYZ5jmCa9C8FheMOv1a4Mci5/sT\nFpsJetbc1kUl0eSq7T454IZHqoGZgeKtEh8e0s3XcWXAwSVLhCfDuSqmI6641twt\n2wH3PYZzNwKBgC3dm1KJeLaz01iuASdlXnwwWEXwjMrH2ZBUV8ktpBmTLWL9t1EG\nYzx8vUM4xWYU2K6Fw2crEifZnnlFB7VjO5P9QSfOP3Hk4V32e6qQiHUw3dO54BqU\nx8YpGL4yHKwI79qb/EMyV4V0cW02VrL4agrsgXWINklfX1uf9Nb9GRFJAoGBAITG\nOvYLKXl3lSyQ9ClBQw50bc4yV2kDh6yp1qUvRM/H7UEgwGmG+i0RHhM09kpXQjkz\nzk0YpZQtMDwue5ullzV5sKu8GjdIsX5TuJHIAz/x0Te6gwbFmfm0IOAfjeGNmP9I\niSp+VpLR5LxRVug9cr3mdVw8G9YuOUvU9y6a5aUpAoGBAIjqytLGkPDgVjKDDIsC\na7kB+rfMsV6DvN5DFzeGkqYYii1PkgT5Umt2Ug3cABPg+KnrNryMxOMuYZ9p7+H5\nn0Cp23q+cRsyxZt+SgL70nd4Mh38NebSKihMKI9FcJO94LjwnyQQ/NvqgLqgp4uf\n5l4GoZaGClxx7pkb4bqRvkKG\n-----END PRIVATE KEY-----\n",
    client_email: "phoenixsoftsolutions@x-planet-433214-k7.iam.gserviceaccount.com",
    client_id: "105576183882585226465",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/phoenixsoftsolutions%40x-planet-433214-k7.iam.gserviceaccount.com",
  },
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
