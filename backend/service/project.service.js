const projectRepository = require("../repository/project.repository");

class ProjectService {
  create = async (projectDetails) => {
    try {
      const result = await projectRepository.create(projectDetails);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await projectRepository.getAll();
    } catch (error) {
      throw error;
    }
  };

  deleteProject = async (id) => {
    try {
      await projectRepository.deleteProject(id);
    } catch (error) {
      throw error;
    }
  };
}

const projectServiceInstance = new ProjectService();
module.exports = projectServiceInstance;
