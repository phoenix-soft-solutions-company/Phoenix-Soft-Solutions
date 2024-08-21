const Project = require("../model/project.model");
const mongoBase = require("../utils/mongo");

class ProjectRepository {
  create = async (feedbackDetails) => {
    try {
      return await mongoBase.create(Feedback, feedbackDetails);
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await mongoBase.findAll(Feedback);
    } catch (error) {
      throw error;
    }
  };

  deleteFeedback = async (id) => {
    try {
      return await mongoBase.findByIdAndDelete(Feedback, id);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new ProjectRepository();
