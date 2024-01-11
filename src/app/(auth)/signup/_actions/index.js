"use server";
import supabase from "../../../../../supabase";
// Signs the user up through custom credentials. A trigger will be fired on
// supabase to add data to the users table AFTER added to the auth.users table
const signup = async (name, username, email, password) => {
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
    console.log("This is the error: ", error);
    return JSON.stringify(error);
  } else {
    console.log("This is the data ", data);
    return JSON.stringify(data);
  }
};

export default signup;
