const router = require("express").Router();
const authService = require("../service/auth.service");
const rsa = require("../utils/ras.decrypt");
const { statusCodes, error, success } = require("../constants");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = JSON.parse(rsa.decryptWithPrivateKey(req.body.token));

    const authResult = await authService.userLogin(email, password);

    if (!authResult) {
      return res.status(statusCodes.unauthorized).json(error.invalidEmailOrPassword);
    } else {
      return res.status(statusCodes.success).json(success.loggedInSuccess);
    }
  } catch (error) {
    next(error);
  }
};

router.post("/login", userLogin);

module.exports = router;
