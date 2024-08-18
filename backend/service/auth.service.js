const userRepository = require("../repository/user.repository");
const authentication = require("../utils/authentication");
const { error, success } = require("../constants");

class AuthService {
  userLogin = async (email, password) => {
    try {
      password = authentication.encryption(password);

      const foundUser = await userRepository.findUser({ email, password });

      if (!foundUser) {
        return null;
      } 

      return foundUser;
    } catch (error) {
      throw error;
    }
  };
}

const authServiceInstance = new AuthService();
module.exports = authServiceInstance;
