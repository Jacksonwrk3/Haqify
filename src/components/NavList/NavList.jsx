import React from "react";

function NavList(props) {
  return (
    <>
      <ul
        className={`text-center absolute border-t z-50 bg-white duration-300 w-full top-full ease-in-out  ${
          props.isOpen ? "border-t" : "-translate-x-full "
        }`}
      >
        <li className="pt-4 pb-2 font-martian">Jobs</li>
        <li className="py-2 font-martian">Find a team</li>
        <li className="py-2 font-martian">Projects</li>
        <li className="pt-2 pb-4 border-b font-martian">README guide</li>
        {/* Have to figure out a way to unrender Log in button when hamburger menu is no
        longer needed and render it next to the sign up button instead*/}
        <li className="pt-4 pb-4 font-martian">Log in</li>
      </ul>
    </>
  );
}

export default NavList;

// -translate-x-px
