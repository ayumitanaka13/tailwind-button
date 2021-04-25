import React, { useState } from "react";

import ColorsData from "../components/ColorsData";
import { ColorButton, TailwindButton } from "../components";
import { Box } from "../components/UI";

const Create = () => {
  const [color, setColor] = useState("");
  const [code, setCode] = useState("");

  const getColor = (e) => {
    setColor(e.target.value);
  };
  const getCode = (e) => {
    let copiedCode = e.target.innerText;
    document.execCommand("Copy");
    alert("Copied!" + copiedCode);
    // console.log(e.target.innerText);
    // console.dir(e.target);
  };

  return (
    <div className="Page">
      <div className="w-5/6">
        <h2>Create Your Original Button Component.</h2>
        <Box>
          <TailwindButton className={color} />
        </Box>
        <Box>
          {ColorsData.map((color, index) => (
            <div key={index}>
              <ColorButton value={color} onClick={getColor} className={color} />
            </div>
          ))}
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
