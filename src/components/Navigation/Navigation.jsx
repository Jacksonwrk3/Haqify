import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuModal from "../MenuModal/MenuModal";
import PrimaryButtonStyleWrapper from "../UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper";
function Navigation() {
  return (
    <nav className="relative flex flex-col w-full ">
      <div className="flex flex-row items-center justify-between w-full h-24">
        <DesktopMenu />

        <div className="flex flex-row items-center">
          <Menu />
          <Logo />
        </div>
        <div className="flex items-center justify-center mr-5 lg:basis-0 lg:flex-grow lg:justify-end">
          <PrimaryButtonStyleWrapper>
            <button className="font-semibold font-martian">Sign Up</button>
          </PrimaryButtonStyleWrapper>
        </div>
      </div>
    </nav>
  );
}

function DesktopMenu() {
  return (
    <ul className="hidden lg:ml-5 lg:space-x-10 lg:basis-0 lg:flex lg:flex-grow">
      <li className="text-sm font-martian">Jobs</li>
      <li className="text-sm font-martian">Find a team</li>
      <li className="text-sm font-martian">Projects</li>
      <li className="text-sm font-martian">README guide</li>
    </ul>
  );
}
export default Navigation;
