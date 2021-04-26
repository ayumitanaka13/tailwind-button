import React from "react";

const TailwindButton = ({ className }) => {
  return (
    <button id="tailwindButton" className={`py-2 px-4 ${className}`}>
      Button
    </button>
  );
};

export default TailwindButton;
