"use server";
import supabase from "../../../../../supabase";

export const signup = async (name, username, email, password) => {
  console.log("inside server component");
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
    console.log(error);
    return JSON.stringify(error);
  } else {
    console.log("This is the data ", data);
    return JSON.stringify(data);
  }
};
