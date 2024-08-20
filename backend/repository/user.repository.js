const User = require("../model/user.model");
const mongoBase = require("../utils/mongo");

class UserRepository {
  findUser = async (filter) => {
    try {
      return await mongoBase.findOne(User, filter);
    } catch (error) {
      throw error;
    }
  };

  createUser = async (userDetails) => {
    try {
      if (await this.findUser({ email: userDetails.email })) {
        return null;
      }
      return await mongoBase.create(User, userDetails);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new UserRepository();
