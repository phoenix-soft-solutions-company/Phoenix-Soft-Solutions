const authentication = require("../utils/authentication");
const userRepository = require("../repository/user.repository");

class UserService {
  registerUser = async (userDetails) => {
    try {
      userDetails.password = authentication.encryption(userDetails.password);
      const result = await userRepository.createUser(userDetails);
      return result;
    } catch (error) {
      throw error;
    }
  };
}

const userServiceInstance = new UserService();
module.exports = userServiceInstance;