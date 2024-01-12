"use server";
import supabase from "../../../../../supabase";
import inputValidation from "../../../../util/validations/inputValidation";
// Signs the user up through custom credentials. A trigger will be fired on
// supabase to add data to the users table AFTER added to the auth.users table
const signup = async (name, username, email, password) => {
  const formInputErrors = serverSideFormValidation(
    name,
    username,
    email,
    password
  );
  if (formInputErrors !== null) {
    return {
      name: "Server Form Validation Error",
      message: formInputErrors,
      status: 403,
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
        return JSON.stringify(error);
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
    return {
      nameError: nameError,
      usernameError: usernameError,
      isEmail: isEmail,
      passwordError: passwordError,
    };
  } else {
    return null;
  }
};

export default signup;
