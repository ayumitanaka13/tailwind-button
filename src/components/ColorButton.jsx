import React from "react";

const ColorButton = ({ onClick, className }) => {
  return (
    <button
      value={className}
      onClick={onClick}
      className={`${className} h-4 w-4 m-1`}
    ></button>
  );
};

export default ColorButton;
