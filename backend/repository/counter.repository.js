const Counter = require("../model/counter.model");
const mongoBase = require("../utils/mongo");

class CounterRepository {
  create = async (counterDetails) => {
    try {
      return await mongoBase.create(Counter, counterDetails);
    } catch (error) {
      throw error;
    }
  };

  update = async (id, counterDetails) => {
    try {
      const updatedCounter = await mongoBase.update(Counter, { _id: id }, counterDetails);
      return updatedCounter;
    } catch (error) {
      throw error;
    }
  };

  findById = async (id) => {
    try {
      return await mongoBase.findById(Counter, id);
    } catch (error) {
      throw error;
    }
  };
}

const counterRepositoryInstance = new CounterRepository();
module.exports = counterRepositoryInstance;
