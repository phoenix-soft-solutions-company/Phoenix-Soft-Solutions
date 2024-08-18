const router = require("express").Router();
const counterService = require("../service/counter.service");
const { error, success, statusCodes } = require("../constants");

const create = async (req, res, next) => {
  try {
    const result = await counterService.create(req.body);

    if (!result) {
      return res.status(statusCodes.badRequest).json(error.counterCreatedFailed);
    } else {
      return res.status(statusCodes.created).json(success.counterCreated);
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await counterService.update(req.params.id, req.body);

    if (!result) {
      return res.status(statusCodes.notFound).json(error.counterNotFound);
    } else {
      return res.status(statusCodes.success).json(success.counterUpdated);
    }
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const result = await counterService.findById(req.params.id);

    if (!result) {
      return res.status(statusCodes.notFound).json(error.counterNotFound);
    } else {
      return res.status(statusCodes.success).json(result);
    }
  } catch (error) {
    next(error);
  }
};

router.post("/", create);
router.put("/:id", update);
router.get("/:id", findById);

module.exports = router;
