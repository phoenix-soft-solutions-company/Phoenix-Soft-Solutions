const crypto = require("crypto");

class Authentication {
  encryption = (plainText) => {
    try {
      return crypto.createHash("sha256").update(plainText).digest("hex");
    } catch (error) {
      throw error;
    }
  };
}

const authenticationInstance = new Authentication();
module.exports = authenticationInstance;