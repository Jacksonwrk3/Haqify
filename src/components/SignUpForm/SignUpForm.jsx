"use client";
import React, { useState } from "react";
import supabase from "../../../supabase.js";
import { signup } from "../../app/(auth)/signup/_actions/index.js";
import { useFormStatus } from "react-dom";
import formValidation from "../../util/signUpValidation.js";
import PrimaryButtonStyleWrapper from "../UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper.jsx";
function SignUpForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [fullNameError, setFullNameError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);

  // Validates the form, check if there are any errors in the inputs
  const validateForm = (name, username, email, password) => {
    setFullNameError(formValidation.hasNameError(name));
    setUsernameError(formValidation.hasUsernameError(username));
    setPasswordError(formValidation.hasPasswordError(password));
  };

  // Handles the form "submission"
  const formAction = (name, username, email, password) => {
    validateForm(
      enteredFullName,
      enteredUsername,
      enteredEmail,
      enteredPassword
    );
    if (
      setFullNameError !== null ||
      setUsernameError !== null ||
      setPasswordError !== null
    ) {
      return;
    } else {
      signup(enteredFullName, enteredUsername, enteredEmail, enteredPassword);
    }
  };
  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setEnteredFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setEnteredUsername(e.target.value);
  };

  const { pending } = useFormStatus();
  return (
    <form
      action={async () => {
        validateForm(
          enteredFullName,
          enteredUsername,
          enteredEmail,
          enteredPassword
        );
        signup(enteredFullName, enteredUsername, enteredEmail, enteredPassword);
      }}
      className=""
    >
      <h1 className="text-3xl font-bold text-center font-poppins sm:text-4xl">
        Sign up to Haqify
      </h1>
      <div className="flex justify-center text-xs font-semibold font-martian sm:text-sm">
        <div className="flex flex-col w-11/12 mt-6 space-y-3">
          <div className="flex space-x-3 ">
            <div className="flex flex-col ">
              <label htmlFor="fullName">Full Name</label>
              {/* name is what the value will show up as in the url segment */}
              <input
                type="text"
                name="fullName"
                className={`${
                  fullNameError !== null ? "bg-red-100" : ""
                } w-full h-12 text-center border border-gray-300 rounded-lg`}
                value={enteredFullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                className={`${
                  usernameError !== null ? "bg-red-100" : ""
                } w-full h-12 text-center border border-gray-300 rounded-lg`}
                value={enteredUsername}
                onChange={handleUsernameChange}
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className={`h-12 text-center border border-gray-300 rounded-lg`}
            value={enteredEmail}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={`${
              passwordError !== null ? "bg-red-100" : ""
            } h-12 text-center border border-gray-300 rounded-lg`}
            value={enteredPassword}
            onChange={handlePasswordChange}
            required
          />
          <div className="flex items-center justify-center w-full h-12 px-3 py-2 duration-300 bg-green-300 border border-green-300 rounded-lg hover:bg-white hover:text-green-300">
            <button className="" aria-disabled={pending}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
