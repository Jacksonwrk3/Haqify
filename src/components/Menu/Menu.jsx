"use client";
import React, { useState, createContext } from "react";
import Hamburger from "../Hamburger/Hamburger";
import NavList from "../NavList/NavList";
import MenuModal from "../MenuModal/MenuModal";

//Menu serves as a client component that allows hamburger menu and navlist to share state,
// without having to lift state up to Navigation component. Allowing us to keep it as a server component.
function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger isOpen={isOpen} setOpen={setOpen} />
      <NavList isOpen={isOpen} />
      <MenuModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}

// Move MenuModal outside of the Menu component's return statement

export default Menu;
