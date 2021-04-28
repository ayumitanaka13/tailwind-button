import React from "react";

const SmallButton = ({ button, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="ButtonSmall">
      {button}
    </button>
  );
};

export default SmallButton;
