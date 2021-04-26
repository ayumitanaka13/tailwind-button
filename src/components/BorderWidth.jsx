import React from "react";

const BorderWidth = ({ onClick, className }) => {
  return (
    <button
      value={className}
      onClick={onClick}
      className={`${className} h-8 w-8 mx-1 border-white bg-white bg-opacity-20`}
    ></button>
  );
};

export default BorderWidth;
