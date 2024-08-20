const Project = require("../model/project.model");
const mongoBase = require("../utils/mongo");

class ProjectRepository {
  create = async (projectDetails) => {
    try {
      return await mongoBase.create(Project, projectDetails);
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await mongoBase.findAll(Project);
    } catch (error) {
      throw error;
    }
  };

  deleteProject = async (id) => {
    try {
      return await mongoBase.findByIdAndDelete(Project, id);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new ProjectRepository();
