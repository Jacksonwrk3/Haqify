"use client";
import React, { useState } from "react";

// The width of this component is determined by it's parents hard
// coded width
const Hamburger = (props) => {
  const lineStyles = `h-0.5 w-full my-1  bg-black transition ease transform duration-200`;

  return (
    <div className="flex items-center ">
      <button
        className="w-5 text-center"
        onClick={() =>
          props.setOpen((prevState) => {
            return !prevState;
          })
        }
      >
        <div
          className={`${lineStyles} ${
            props.isOpen && "rotate-45 translate-y-1.5"
          }`}
        />
        <div className={`${lineStyles} ${props.isOpen && "opacity-0"}`} />
        <div
          className={`${lineStyles} ${
            props.isOpen ? "-rotate-45 -translate-y-1.5" : "w-1/2"
          }`}
        />
      </button>
    </div>
  );
};

export default Hamburger;
