import React from "react";

const Button = ({ type, value, button, onClick }) => {
  return (
    <button type={type} value={value} onClick={onClick} className="Button">
      {button}
    </button>
  );
};

export default Button;
