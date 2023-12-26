import React from "react";

// Props: margin, children
// Not a button, just a wrapper for buttons style.
const PrimaryButtonStyleWrapper = (props) => {
  return (
    <div
      className={`${props.margin}  flex items-center px-3 py-2 duration-300 bg-green-300 border border-green-300 rounded-lg hover:bg-white hover:text-green-300`}
    >
      {props.children}
    </div>
  );
};

export default PrimaryButtonStyleWrapper;
