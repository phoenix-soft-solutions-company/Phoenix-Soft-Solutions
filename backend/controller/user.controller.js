const router = require("express").Router();
const userService = require("../service/user.service");
const { error, success, statusCodes } = require("../constants");

const registerUser = async (req, res, next) => {
  try {
    const result = await userService.registerUser(req.body);

    if (!result) {
      return res.status(statusCodes.conflict).json(error.emailExists);
    } else {
      return res.status(statusCodes.created).json(success.userCreated);
    }
  } catch (error) {
    next(error);
  }
};

router.post("/", registerUser);

module.exports = router;
