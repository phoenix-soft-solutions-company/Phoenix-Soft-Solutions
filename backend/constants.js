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
    connectionError: { code: 13000, message: "MongoDB connection error" },
    invalidEmailOrPassword: { code: 13001, message: "invalid Email or Password" },
    emailExists: { code: 13002, message: "Email is already exists" },
  },

  success: {
    connectionSuccessful: { code: 14000, message: "Connected to MongoDB" },
    loggedInSuccess: { code: 14001, message: "Logged in Successfully" },
    userCreated: { code: 14002, message: "User created Successfully" },
  },
};
