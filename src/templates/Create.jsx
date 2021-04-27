import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import Clipboard from "react-clipboard.js";

import { signOut } from "../reducks/users/operations";
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
import { Box, BoxSmall, Button, CodeBox } from "../components/UI";

const Create = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(""),
    [borderColor, setBorderColor] = useState(""),
    [borderWidth, setBorderWidth] = useState(""),
    [borderRadius, setBorderRadius] = useState(""),
    [textColor, setTextColor] = useState(""),
    [initialCode, setInitialCode] = useState("");

  const codeRef = useRef(null);

  useEffect(() => {
    setInitialCode(`
        export const Button = () => { 
          return  <button className="py-2 px-4">Button</button>
        }
      `);
  }, []);

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

  return (
    <div className="Page h-full">
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
        {/* <Box></Box> */}
        <CodeBox>
          <code className="BoxContainer" ref={codeRef}>
            export const Button = () ={"> {"}
            <br />
            &emsp;return {" <"}button className="py-2 px-4 {color} {borderWidth}{" "}
            {borderColor} {borderRadius} {textColor}"{">"}Button
            {"<"}/button
            {">"}
            <br />
            {"}"}
          </code>
        </CodeBox>
        {codeRef.current ? (
          <Clipboard data-clipboard-text={codeRef.current.innerText}>
            copy
          </Clipboard>
        ) : (
          <Clipboard data-clipboard-text={initialCode}>copy</Clipboard>
        )}
        <Button
          type="submit"
          value="Sign Out"
          button="Sign Out"
          onClick={(e) => {
            e.preventDefault();
            dispatch(signOut());
          }}
        />
      </div>
    </div>
  );
};

export default Create;
