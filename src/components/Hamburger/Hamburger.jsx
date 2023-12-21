"use client";
import React, { useState } from "react";

// The width of this component is determined by it's parents hard
// coded width
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lineStyles = `h-[2px] w-full my-1 rounded-full bg-black transition ease transform duration-200`;

  return (
    <button className="w-full text-center" onClick={() => setIsOpen(!isOpen)}>
      <div
        className={`${lineStyles} ${isOpen && "rotate-45 translate-y-1.5"}`}
      />
      <div className={`${lineStyles} ${isOpen && "opacity-0"}`} />
      <div
        className={`${lineStyles} ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "w-1/2"
        }`}
      />
    </button>
  );
};

export default Hamburger;
