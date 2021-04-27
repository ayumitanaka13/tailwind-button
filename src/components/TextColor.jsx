import React from "react";

const TextColor = ({ onClick, className }) => {
  return (
    <button
      value={`text-${className}`}
      onClick={onClick}
      className={`text-${className} m-1`}
    >
      A
    </button>
  );
};

export default TextColor;
