import React from "react";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
function Navigation() {
  return (
    <nav className="flex items-center border border-red-400">
      <div className="flex items-center w-5">
        <Hamburger />
      </div>
      <Logo />
    </nav>
  );
}

export default Navigation;
