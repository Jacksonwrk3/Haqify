import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuModal from "../MenuModal/MenuModal";
function Navigation() {
  return (
    <nav className="flex flex-col w-full ">
      <div className="flex flex-row items-center w-full h-24 ">
        <Menu />
        <Logo />
      </div>
    </nav>
  );
}

export default Navigation;
