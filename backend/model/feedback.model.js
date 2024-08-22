const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
