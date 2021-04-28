import React from "react";

const Button = ({ type, value, button, onClick, onMouseOver }) => {
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      onMouseOver={onMouseOver}
      className="Button"
    >
      {button}
    </button>
  );
};

export default Button;
