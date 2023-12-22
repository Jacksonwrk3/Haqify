import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
function Navigation() {
  return (
    <nav className="flex flex-col w-full">
      <div className="relative flex flex-row items-center w-full h-24 ">
        <Menu />
        <Logo />
      </div>
    </nav>
  );
}

export default Navigation;
