const counterRepository = require("../repository/counter.repository");

class CounterService {
  create = async (counterDetails) => {
    try {
      return await counterRepository.create(counterDetails);
    } catch (error) {
      throw error;
    }
  };

  update = async (id, counterDetails) => {
    try {
      return await counterRepository.update(id, counterDetails);
    } catch (error) {
      throw error;
    }
  };

  findById = async (id) => {
    try {
      return await counterRepository.findById(id);
    } catch (error) {
      throw error;
    }
  };
}

const counterServiceInstance = new CounterService();
module.exports = counterServiceInstance;
