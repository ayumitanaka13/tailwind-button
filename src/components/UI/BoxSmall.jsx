import React from "react";

const BoxSmall = (props) => {
  return <div className={`BoxSmall ${props.className}`}>{props.children}</div>;
};

export default BoxSmall;
