import React from "react";

const BgColor = ({ onClick, className }) => {
  return (
    <button
      value={`bg-${className}`}
      onClick={onClick}
      className={`bg-${className} h-4 w-4 m-1`}
    ></button>
  );
};

export default BgColor;
