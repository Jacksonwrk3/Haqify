"use client";
import React, { useState } from "react";

function SignUpForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const handleSubmit = (e) => {
    console.log("hello");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-center">Sign up to Haqify</h1>
      <div className="flex justify-center">
        <div className="flex flex-col w-11/12 mt-6 space-y-2">
          <label htmlFor="email">Email</label>
          {/* name is what the value will show up as in the url segment */}
          <input
            type="email"
            id="email"
            name="email"
            className="text-center border border-gray-300 rounded-lg h-11"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-center border border-gray-300 rounded-lg h-11"
          />
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
