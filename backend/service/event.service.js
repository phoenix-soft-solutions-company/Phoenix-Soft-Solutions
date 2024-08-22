const eventRepository = require("../repository/event.repository");

class EventService {
  create = async (eventDetails) => {
    try {
      const result = await eventRepository.create(eventDetails);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await eventRepository.getAll();
    } catch (error) {
      throw error;
    }
  };

  deleteEvent = async (id) => {
    try {
      await eventRepository.deleteEvent(id);
    } catch (error) {
      throw error;
    }
  };
}

const eventServiceInstance = new EventService();
module.exports = eventServiceInstance;
