import React from "react";
const MenuModal = (props) => {
  if (props.isOpen) {
    return (
      <div
        className="absolute w-screen h-screen bg-black bg-opacity-50 top-full"
        onClick={() =>
          props.setOpen((prevState) => {
            return !prevState;
          })
        }
      ></div>
    );
  } else {
    return null;
  }
};

export default MenuModal;
