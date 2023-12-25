import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuModal from "../MenuModal/MenuModal";
import PrimaryButtonStyleWrapper from "../UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper";
function Navigation() {
  return (
    <nav className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between w-full h-24">
        <div className="flex flex-row ">
          <Menu />
          <Logo />
        </div>
        <div className="flex items-center justify-center mr-5 ">
          <PrimaryButtonStyleWrapper>
            <button className="font-semibold font-martian">Sign Up</button>
          </PrimaryButtonStyleWrapper>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
