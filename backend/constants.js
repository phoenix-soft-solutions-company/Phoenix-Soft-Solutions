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
    counterCreatedFailed: { code: 13003, message: "Counter created failed" },
    counterNotFound: { code: 13004, message: "Counter not found" },
    internalServerError: { code: 13005, message: "Internal Server Error" },
    projectCreatedFailed: { code: 13006, message: "Project created failed" },
    projectNotFound: { code: 13007, message: "Project not found" },
    feedbackCreatedFailed: { code: 13008, message: "Feedback created failed" },
    feedbackNotFound: { code: 13009, message: "Feedback not found" },
    eventCreatedFailed: { code: 13010, message: "Feedback created failed" },
    eventNotFound: { code: 13011, message: "Event not found" },
  },

  success: {
    connectionSuccessful: { code: 14000, message: "Connected to MongoDB" },
    loggedInSuccess: { code: 14001, message: "Logged in Successfully" },
    userCreated: { code: 14002, message: "User created Successfully" },
    counterCreated: { code: 14003, message: "Counter created Successfully" },
    counterUpdated: { code: 14004, message: "Counter updated Successfully" },
    projectCreated: { code: 14005, message: "Project created Successfully" },
    projectDeleted: { code: 14006, message: "Project deleted Successfully" },
    feedbackCreated: { code: 14007, message: "Feedback created Successfully" },
    feedbackDeleted: { code: 14008, message: "Feedback deleted Successfully" },
    eventCreated: { code: 14009, message: "Event created Successfully" },
    eventDeleted: { code: 14010, message: "Event deleted Successfully" },
  },

  googleDriveCredetials: {
    type: "service_account",
    project_id: "decent-glazing-434520-g9",
    private_key_id: "4763562d85e1e44baa9416b991cebd28e92b4ba4",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCDvUgxlIKko3qk\nh8W2EGZcWGpnGabZYh76DSA8k41cJHl0c9WKvn9o8W8v3WzZgMPMLammUNVpHGOP\nDdXy/Kae/kFbkEDGPkj/GBcQ154sBIonWd/Kzjv68/hetjBugdFKEv23ESBj+fMj\nSB23NWGQlw/2RT0jyRQLmre55cESbTM5lPLh+3pAGBxLe00n/T4Zj55AgyaO6GKG\nh5X4oMFTZyRIDSEQRG8EXDpFpzuq3y3+8I0sGxKzz0mTq2un98vOjoprPmfQ9qMH\ny9otm03Vkwt4N4As8KCzj2omsmwYzdFNIaKRLclZQ9IjYt/kvnAy5QYxA9m7rL6p\nxmeKsoKhAgMBAAECggEAAytv4Wgs19rqbatUnvj4YDAXvfZN35IZo7ONeyz5AZFh\nGLkGwh6rlcdQAQtR/fkNUkwmS6RLQOBYJuN9f9SuCkpHdqAFvEoDBfGQRdf3lss0\ngGuMU7wFkRgDTv1m3z8hXX0P0gfyoGUtq+4lb43fFJRbOSDZA+jnzLsCwPwdr/Hx\ngLIuJZBlcLIKDLX6LYjdvNoic5bGcdWAsmgu6wgq8Mto54SfCm0+ZVUML7AdhweV\nzfQ+lpgPajvG80Z6AVPCWVWyj6/Ng+CQAtTPk/ZG4dGICYB7ILGpaD8F2dLfExDA\nsnhQqeQ2hYLmS7rUaT/GCylsUzi4yIXUFmnLOw+uaQKBgQC5BSiK+M9PlgaKq++i\nINT+vgZoebgd+XuVAP5AgI/hxXLI830KyGZGyFYu/xgVaq3v9Ph9a7TVQMcKOojy\nWj7jg4sfcSR8HQyBMuVvK8KmYEvbRglQYGxDFSyEuStGjX+KtHaU6oUnhw0ft9G4\nsqppPvy8/R+aq0Zp7bI5XVkc5QKBgQC2R2p0xy4dOnugDxN+FPoYfkXP8kQrM2aZ\n9n91eKWy/tADE87MieX6kxRvprrlH+SxoFMpE9LS+xP2AuJamNkGNFSw+AoxrHzq\nUy8H0hyYnVawa607bsRC5l+Gc1YiHjUDwL1glCTKWGjJUVO1IaacAE43nkcd/GmW\nT+sb/YYvDQKBgBVvpI/dXd+BqUZdv0jQdv0AtStbltpaMlhEIjEE9CabQr5Hf6BF\nMZxXz6xoP7kTgA2CG1wko3HlrGnh+EXj8M9ZSUAeUrTShMVfSTfFISs3kvJXvfKD\nCWgIRv0lmv70m+dNG0QLm9vFiN645GJ6yMWi15Np3ESGPYU+VdzRlOaFAoGAU0fn\n3LkQWaxZxXR97HI7Hiu7S9odyTsv2pJkA9D+q/x+H5nSN2Od3tGKWcTsyTi8LWfZ\n9v+mqFys7w68SrZhGdOZCk4Zoj5zyD//Uexuwk/Ixsw7ltbx9rr41B4oMWhpwnAy\nVkj5UjX4klqFC1H3pHkDQ6geSBYGS/XxrpUz1JUCgYEAooWEqbfhs/AW4F8mUe3V\n2iC7S/zlRWGuqU7lTJKiVnPziZRUhowmZvZix5nsHVWtGM9nhiCxcClKUi55b6MZ\nR0v11EfRs0GbQASOYrn2PKCg3SQDfbp1U2DbxzDBKYgTU7iCKn/HvmxrFgXQEdZE\n6RJsbkKJ4LRJaq4NO873me4=\n-----END PRIVATE KEY-----\n",
    client_email: "phoenixsoftsolutions@decent-glazing-434520-g9.iam.gserviceaccount.com",
    client_id: "105537992963242782707",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/phoenixsoftsolutions%40decent-glazing-434520-g9.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
    GOOGLE_DRIVE_FOLDER_ID: "1RGhp_yZmWg7WfPti5gaJnYcvsBNUL6h6",
  },
};
