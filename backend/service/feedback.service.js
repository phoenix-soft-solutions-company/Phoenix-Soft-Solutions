const feedbackRepository = require("../repository/feedback.repository");

class FeedbackService {
  create = async (feedbackDetails) => {
    try {
      const result = await feedbackRepository.create(feedbackDetails);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await feedbackRepository.getAll();
    } catch (error) {
      throw error;
    }
  };

  deleteFeedback = async (id) => {
    try {
      await feedbackRepository.deleteFeedback(id);
    } catch (error) {
      throw error;
    }
  };
}

const feedbackServiceInstance = new FeedbackService();
module.exports = feedbackServiceInstance;
