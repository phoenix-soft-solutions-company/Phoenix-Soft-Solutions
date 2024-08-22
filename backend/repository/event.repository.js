const Event = require("../model/event.model");
const mongoBase = require("../utils/mongo");

class EventRepository {
  create = async (eventDetails) => {
    try {
      return await mongoBase.create(Event, eventDetails);
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await mongoBase.findAll(Event);
    } catch (error) {
      throw error;
    }
  };

  deleteEvent = async (id) => {
    try {
      return await mongoBase.findByIdAndDelete(Event, id);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new EventRepository();
