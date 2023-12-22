import React from "react";

function NavList(props) {
  return (
    <>
      <ul
        className={`pt-7 text-center absolute border-t  duration-300 w-full top-full ease-in-out ${
          props.isOpen ? "-translate-x-px border-t" : "-translate-x-full "
        }`}
      >
        <li className="font-martian">Jobs</li>
        <li className="font-martian">Find a team</li>
        <li className="font-martian">Projects</li>
        <li className="font-martian">README guide</li>
      </ul>
    </>
  );
}

export default NavList;
