import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuModal from "../MenuModal/MenuModal";
import Link from "next/link";
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
        <div className="flex items-center justify-center mr-5 space-x-6 border border-red-300 xl:mr-10 lg:basis-0 lg:flex-grow lg:justify-end">
          <Link
            href="/login"
            className="hidden font-semibold lg:block font-martian"
          >
            Log in
          </Link>
          <PrimaryButtonStyleWrapper>
            <Link href="/signup" className="font-semibold font-martian">
              Sign Up
            </Link>
          </PrimaryButtonStyleWrapper>
        </div>
      </div>
    </nav>
  );
}

function DesktopMenu() {
  return (
    <ul className="hidden font-martian lg:ml-5 xl:ml-10 lg:space-x-6 lg:basis-0 lg:flex lg:flex-grow lg:text-xs xl:text-base">
      <li>Jobs</li>
      <li>Find a team</li>
      <li>Projects</li>
      <li>README guide</li>
    </ul>
  );
}
export default Navigation;
