const { google } = require("googleapis");
const { PassThrough } = require("stream");
const { googleDriveCredetials } = require("../constants");
require("dotenv").config();

// Google Drive API setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: googleDriveCredetials.type,
    project_id: googleDriveCredetials.project_id,
    private_key_id: googleDriveCredetials.private_key_id,
    private_key: googleDriveCredetials.private_key,
    client_email: googleDriveCredetials.client_email,
    client_id: googleDriveCredetials.client_id,
    auth_uri: googleDriveCredetials.auth_uri,
    token_uri: googleDriveCredetials.token_uri,
    auth_provider_x509_cert_url: googleDriveCredetials.auth_provider_x509_cert_url,
    client_x509_cert_url: googleDriveCredetials.client_x509_cert_url,
  },
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});
const drive = google.drive({ version: "v3", auth });

// Function to upload image to Google Drive and return the file ID
const uploadImageToDrive = async (file) => {
  if (!file) return "";

  try {
    const fileMetadata = {
      name: `${Date.now()}-${file.originalname}`,
      parents: [googleDriveCredetials.GOOGLE_DRIVE_FOLDER_ID],
    };

    const bufferStream = new PassThrough();
    bufferStream.end(file.buffer);

    const media = {
      mimeType: file.mimetype,
      body: bufferStream,
    };

    const fileResponse = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink, webContentLink",
    });

    await drive.permissions.create({
      fileId: fileResponse.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    return fileResponse.data.id;
  } catch (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

module.exports = { uploadImageToDrive };
