import React from "react";

const BorderRadius = ({ onClick, className }) => {
  return (
    <button
      value={className}
      onClick={onClick}
      className={`${className} h-2 lg:h-4 w-4 lg:w-8 mx-1 bg-white`}
    ></button>
  );
};

export default BorderRadius;
