module.exports = {
  statusCodes: {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    serverError: 500,
  },

  error: {
    connectionError: { code: 13010, message: "MongoDB connection error:" },
  },

  success: {
    connectionSuccessful: { code: 14010, message: "Connected to MongoDB" },
    loggedInSuccess: { code: 14002, message: "Logged in Successfully" },
  },
};
