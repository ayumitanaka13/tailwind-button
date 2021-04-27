import React, { useState } from "react";

import {
  BgColor,
  BorderColor,
  BorderWidth,
  BorderRadius,
  TailwindButton,
  TextColor,
} from "../components";
import {
  ColorsData,
  BorderWidthData,
  BorderRadiusData,
} from "../components/data";
import { Box, BoxSmall, CodeBox } from "../components/UI";

const Create = () => {
  const [color, setColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const [borderRadius, setBorderRadius] = useState("");
  const [textColor, setTextColor] = useState("");

  const getColor = (e) => {
    setColor(e.target.value);
  };
  const getBorderColor = (e) => {
    setBorderColor(e.target.value);
  };
  const getBorderWidth = (e) => {
    setBorderWidth(e.target.value);
  };
  const getBorderRadius = (e) => {
    setBorderRadius(e.target.value);
  };
  const getTextColor = (e) => {
    setTextColor(e.target.value);
  };

  const getCode = (e) => {
    let copiedCode = e.target.innerText;
    navigator.clipboard.writeText(copiedCode);
    alert("Copied!");
    console.log(copiedCode);
  };

  return (
    <div className="Page">
      <div className="w-5/6 my-16">
        <h3 className="text-center mb-8">
          Create Your Tailwind Button Component.
        </h3>
        <BoxSmall>
          <TailwindButton
            className={`${color} ${borderWidth} ${borderColor} ${borderRadius} ${textColor}`}
          />
        </BoxSmall>
        <Box>
          <div className="BoxContainer">
            {ColorsData.map((color, index) => (
              <div key={index}>
                <BgColor value={color} onClick={getColor} className={color} />
              </div>
            ))}
          </div>
        </Box>
        <BoxSmall>
          <div className="BoxContainer">
            {BorderWidthData.map((width, index) => (
              <div key={index}>
                <BorderWidth
                  value={width}
                  onClick={getBorderWidth}
                  className={width}
                />
              </div>
            ))}
          </div>
        </BoxSmall>
        <Box>
          <div className="BoxContainer">
            {ColorsData.map((color, index) => (
              <div key={index}>
                <BorderColor
                  value={color}
                  onClick={getBorderColor}
                  className={color}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box>
          <div className="BoxContainer">
            {BorderRadiusData.map((radius, index) => (
              <div key={index}>
                <BorderRadius
                  value={radius}
                  onClick={getBorderRadius}
                  className={radius}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box>
          <div className="BoxContainer">
            {ColorsData.map((color, index) => (
              <div key={index}>
                <TextColor
                  value={color}
                  onClick={getTextColor}
                  className={color}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box></Box>
        <CodeBox>
          <code onClick={getCode} className="BoxContainer">
            export const Button = () ={"> {"}
            <br />
            &emsp;return {" <"}button className="py-2 px-4 {color} {borderWidth}{" "}
            {borderColor} {borderRadius} {textColor}"{">"}Button{"<"}/button
            {">"}
            <br />
            {"}"}
          </code>
        </CodeBox>
      </div>
    </div>
  );
};

export default Create;
