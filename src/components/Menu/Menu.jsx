"use client";
import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import NavList from "../NavList/NavList";
function Menu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger setOpen={setOpen} isOpen={isOpen} />
      <NavList isOpen={isOpen} />
    </>
  );
}

export default Menu;
