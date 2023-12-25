import React from "react";

const PrimaryButtonStyleWrapper = (props) => {
  return (
    <div className="flex items-center px-3 duration-300 bg-green-300 border border-green-300 rounded-lg hover:bg-white hover:text-green-300 h-11">
      {props.children}
    </div>
  );
};

export default PrimaryButtonStyleWrapper;
