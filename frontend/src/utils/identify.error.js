import {  errorType } from "../constants/messages";

//error handling
const errorMessages = {};
Object.keys(errorType).forEach((key) => {
  errorMessages[errorType[key].code] = errorType[key].message;
});

export const identifyError = (code) => {
  return errorMessages[code] || "Network error! Please try again later";
};
