import check from "./inputCheck";
const hasNameError = (name) => {
  // Name must be at least 3 characters long. I know there are 1-2 letter names, but it's not common enough
  if (name.length < 3) {
    return "Your name must be at least 3 letters long";
  } else if (typeof name !== "string") {
    return "Your name must only contain letters";
  } else if (name.length > 20) {
    return "Your name must be less than 20 characters long";
  } else if (check.containsSpecialCharacters(name)) {
    return "Your name cannot contain special characters";
  } else if (check.containsNumbers(name)) {
    return "Your name must only contain letters";
  } else if (!check.containsLetters(name)) {
    return "Your name must contain letters";
  } else {
    return null;
  }
};

const hasUsernameError = (username) => {
  if (typeof username !== "string") {
    return "Your username must only contain letters";
  } else if (username.length < 3) {
    return "Your username must be at least 3 characters long";
  } else if (username.length > 15) {
    return "Your username be less than 16 characters long";
  } else if (check.containsAccents(username)) {
    return "Your username cannot contain accents";
  } else if (check.containsSpecialCharacters(username)) {
    return "Your username cannot contain special characters";
  } else {
    return null;
  }
};

const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const hasPasswordError = (password) => {
  if (password.length <= 8) {
    return "Use 8 characters or more for your password";
  } else if (
    !containsCapitalLetters(password) ||
    !containsLowerCaseLetters(password) ||
    !containsNumbers(password) ||
    !containsSpecialCharacters(password)
  ) {
    return "Your password must contain at least one capital letter, one lowercase letter, one number, and one special character";
  } else {
    return null;
  }
};

const formValidation = {
  hasNameError: hasNameError,
  hasUsernameError: hasUsernameError,
  hasPasswordError: hasPasswordError,
  isEmail: isEmail,
};

export default formValidation;
