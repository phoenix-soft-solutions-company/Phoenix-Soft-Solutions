const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const { success, error } = require("./constants");
const handleErrors = require("./middleware/error-handler.middleware");
const Project = require("./model/project.model");

require("dotenv").config();

const corsOptions = {
  origin: ["https://monitoring.elzian.com", "http://localhost:3000"],
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, error.connectionError.message));

db.once("open", () => {
  console.log(success.connectionSuccessful.message);
});

// Use the routes defined in the routes.js file
app.use(routes);

// Error handling middleware (should be the last middleware)
app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});