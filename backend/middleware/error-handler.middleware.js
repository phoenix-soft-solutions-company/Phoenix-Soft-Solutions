const { error, statusCodes } = require("../constants");

const handleErrors = (err, req, res, next) => {
  console.error(err.stack);

  // Set a default status code for the error
  const statusCode = err.statusCode || statusCodes.serverError;

  // Send an error response to the client
  res.status(statusCode).json({
    message: err.message || error.internalServerError.message,
    code: err.code || error.internalServerError.code,
  });
};

module.exports = handleErrors;
