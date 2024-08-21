export const errorType = {
  invalidEmailOrPassword: { code: 13001, message: "invalid Email or Pasrd!" },
  emailExists: { code: 13002, message: "Email is already exists!" },
  counterCreatedFailed: { code: 13003, message: "Counter created failed!" },
  counterNotFound: { code: 13004, message: "Counter not found!" },
  internalServerError: { code: 13005, message: "Internal Server Error!" },
  projectCreatedFailed: { code: 13006, message: "Project created failed!" },
  projectNotFound: { code: 13007, message: "Project not found!" },
};

export const messages = {
  counterUpdated: "Counter updated successfully!",
  projectCreated: "Project created Successfully!",
  projectDeleted: "Project deleted Successfully!",
};
