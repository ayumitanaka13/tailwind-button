import React, { useState } from "react";

import ColorsData from "../components/ColorsData";
import { ColorBorder, ColorButton, TailwindButton } from "../components";
import { Box, Button } from "../components/UI";

const Create = () => {
  const [color, setColor] = useState("");
  // const [color, setColor] = useState("");

  const getColor = (e) => {
    setColor(e.target.value);
  };

  // const getBorderColor = (e) => {
  //   set;
  // };

  const getCode = (e) => {
    let copiedCode = e.target.innerText;
    navigator.clipboard.writeText(copiedCode);
    alert("Copied!");

    console.log(copiedCode);
  };

  return (
    <div className="Page">
      <div className="w-5/6">
        <h2>Create Your Original Button Component.</h2>
        <Box>
          <TailwindButton className={color} />
        </Box>
        <Box>
          <div className="flex flex-wrap px-8">
            {ColorsData.map((color, index) => (
              <div key={index}>
                <ColorButton
                  value={color}
                  onClick={getColor}
                  className={color}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box>
          <div className="flex flex-wrap px-8">
            {ColorsData.map((color, index) => (
              <div key={index}>
                <ColorBorder
                  value={color}
                  onClick={getColor}
                  className={color}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box>
          <code onClick={getCode}>
            &lt;button className="{color}"&gt;Button&lt;/button&gt;
          </code>
        </Box>
      </div>
    </div>
  );
};

export default Create;
