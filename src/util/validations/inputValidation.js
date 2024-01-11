function hasSpecialCharacters(input) {
  return /[!@#$%^&*()_+\-:\[\]{};':"\\|,.<>\/?]+/.test(input);
}

function hasNumbers(input) {
  return /\d/.test(input);
}

function hasAccents(input) {
  return /[À-ÿ]/.test(input);
}

function hasCapitalLetters(input) {
  return /[A-Z]/.test(input);
}

function hasLowerCaseLetters(input) {
  return /[a-z]/.test(input);
}

function hasLetters(input) {
  return /[a-zA-Z]/.test(input);
}

// null means no errors
const hasNameError = (name) => {
  if (name.length < 3) {
    return "Name must be at least 3 letters long";
  } else if (typeof name !== "string") {
    return "Name must only contain letters";
  } else if (name.length > 20) {
    return "Name must be less than 20 characters long";
  } else if (hasSpecialCharacters(name)) {
    return "Name cannot contain special characters";
  } else if (hasNumbers(name)) {
    return "Name must only contain letters";
  } else if (!hasLetters(name)) {
    return "Name must contain letters";
  } else {
    return null;
  }
};

const hasUsernameError = (username) => {
  if (typeof username !== "string") {
    return "Username must only contain letters";
  } else if (username.length < 3) {
    return "Username must be at least 3 characters long";
  } else if (username.length > 15) {
    return "Username be less than 16 characters long";
  } else if (hasAccents(username)) {
    return "Username cannot contain accents";
  } else if (hasSpecialCharacters(username)) {
    return "Username cannot contain special characters";
  } else {
    return null;
  }
};

const isAppropriate = async (name) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAPI_KEY,
  });

  const openai = new OpenAIAPI(configuration);
  const completition = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Is the name ${name} appropriate true or false?`,
      },
    ],
  });
};

const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const hasPasswordError = (password) => {
  if (password.length <= 8) {
    return "Use 8 characters or more for your passwords";
  } else if (!hasCapitalLetters(password)) {
    return "Password must contain at least one capital letter";
  } else if (!hasLowerCaseLetters(password)) {
    return "Password must contain at least one lowercase letter";
  } else if (!hasNumbers(password)) {
    return "Password must contain at least one number";
  } else if (!hasSpecialCharacters(password)) {
    return "Password must contain at least one special character";
  } else {
    return null;
  }
};

const inputValidation = {
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumbers: hasNumbers,
  hasAccents: hasAccents,
  hasCapitalLetters: hasCapitalLetters,
  hasLowerCaseLetters: hasLowerCaseLetters,
  hasLetters: hasLetters,
  hasNameError: hasNameError,
  hasUsernameError: hasUsernameError,
  hasPasswordError: hasPasswordError,
  isEmail: isEmail,
  isAppropriate: isAppropriate,
};

export default inputValidation;
