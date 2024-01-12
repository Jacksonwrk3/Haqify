"use server";
import supabase from "../../../../../supabase";
import inputValidation from "../../../../util/validations/inputValidation";
// Signs the user up through custom credentials. A trigger will be fired on
// supabase to add data to the users table AFTER added to the auth.users table
const signup = async (name, username, email, password) => {
  const formIsValid = serverSideFormValidation(name, username, email, password);

  // Checks if forms are good on server side, but wont send back error. If user filled it out the right way client will show them errors. If form is being exploited then it will just return null.
  if (formIsValid === false) {
    return {
      error: "Form is not valid",
      message: null,
      status: 400,
    };
  }
  return await userNameExists(username).then(async (result) => {
    if (result === true) {
      return {
        name: "Conflict Error",
        message: "Username already exists",
        status: 409,
      };
    } else if (result === false) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            username: username,
          },
        },
      });
      if (error) {
        return error;
      } else {
        return { name: "Success", message: "User created", status: "200" };
      }
    }
  });
};

// Checks if there is a user with the same username in the supabase database
const userNameExists = async (username) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    // filters but with no case sensitivity
    .ilike("username", `%${username}%`);

  if (error) {
    return JSON.stringify(error);
  } else if (data.length > 0) {
    return true;
  } else {
    return false;
  }
};

// Validates the form on the server side (name, username, email, password)
const serverSideFormValidation = (name, username, email, password) => {
  const nameError = inputValidation.hasNameError(name);
  const usernameError = inputValidation.hasUsernameError(username);
  const isEmail = inputValidation.isEmail(email);
  const passwordError = inputValidation.hasPasswordError(password);

  if (
    nameError !== null ||
    usernameError !== null ||
    isEmail !== true ||
    passwordError !== null
  ) {
    return false;
  } else {
    return true;
  }
};

export default signup;
