export const errorType = {
  invalidEmailOrPassword: { code: 13001, message: "invalid Email or Pasrd!" },
  emailExists: { code: 13002, message: "Email is already exists!" },
  counterCreatedFailed: { code: 13003, message: "Counter created failed!" },
  counterNotFound: { code: 13004, message: "Counter not found!" },
  internalServerError: { code: 13005, message: "Internal Server Error!" },
  projectCreatedFailed: { code: 13006, message: "Project created failed!" },
  projectNotFound: { code: 13007, message: "Project not found!" },
  feedbackCreatedFailed: { code: 13008, message: "Feedback created failed!" },
  feedbackNotFound: { code: 13009, message: "Feedback not found!" },
  eventCreatedFailed: { code: 13010, message: "Feedback created failed!" },
  eventNotFound: { code: 13011, message: "Event not found!" },
};

export const messages = {
  counterUpdated: "Counter updated successfully!",
  projectCreated: "Project created Successfully!",
  projectDeleted: "Project deleted Successfully!",
  feedbackCreated: "Feedback created Successfully!",
  feedbackDeleted: "Feedback deleted Successfully!",
  eventCreated: "event created Successfully!",
  eventDeleted: "Event deleted Successfully!",
};
