import React from "react";

const BorderColor = ({ onClick, className }) => {
  return (
    <button
      value={`border-${className}`}
      onClick={onClick}
      className={`border-${className} h-2 w-4 m-1 border-2 bg-white bg-opacity-20`}
    ></button>
  );
};

export default BorderColor;
