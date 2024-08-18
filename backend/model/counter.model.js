const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  experiences: { type: Number, required: true },
  projects: { type: Number, required: true},
  experts: { type: Number, required: true },
  clients: { type: Number, required: true },
});

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;
