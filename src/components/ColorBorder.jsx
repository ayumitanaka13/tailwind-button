import React from "react";

const ColorBorder = ({ onClick, className }) => {
  return (
    <button
      value={`border-${className}`}
      onClick={onClick}
      className={`border-${className} h-2 w-4 m-1 border`}
    ></button>
  );
};

export default ColorBorder;
