"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm.jsx";
import PrimaryButtonStyleWrapper from "../../../components/UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper";

function SignUp() {
  return (
    <div className="w-screen h-screen space-y-6 ">
      <div className="relative mt-6 h-1/3">
        <Image src="signup.svg" alt="Sign up" fill sizes="100vw" />
      </div>
      <div className="flex w-screen place-content-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
