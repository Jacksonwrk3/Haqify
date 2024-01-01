"use client";
import React from "react";
import Image from "next/image";
import SignUpForm from "./SignUpForm.jsx";
import supabase from "../../../../supabase.js";
function SignUp() {
  return (
    <div className="w-screen h-screen space-y-6 border-2 border-blue-300">
      <div className="relative mt-12 h-1/3">
        <Image src="signup.svg" alt="Sign up" fill sizes="100vw" />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
