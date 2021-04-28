import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Clipboard from "react-clipboard.js";

import { signOut } from "../reducks/users/operations";
import { getUserName } from "../reducks/users/selectors";

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
import { Box, BoxSmall, ButtonSmall, CodeBox } from "../components/UI";

const Create = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);

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
  const getClear = () => {
    setColor("");
    setBorderColor("");
    setBorderWidth("");
    setBorderRadius("");
    setTextColor("");
  };
  const isCopied = () => {
    alert("Copied!");
  };

  return (
    <div className="Page h-full" id="top">
      <div className="w-5/6 my-16">
        <h3 className="mb-8" style={{ WebkitTextStroke: "1px #FFF" }}>
          Create {username}'s Tailwind Button Component.
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
        <CodeBox>
          <code className="BoxContainer" ref={codeRef}>
            export const Button = () ={"> {"}
            <br />
            &emsp;return {" <"}button className="{color} {borderWidth}{" "}
            {borderColor} {borderRadius} {textColor} py-2 px-4"{">"}Button
            {"<"}/button
            {">"}
            <br />
            {"}"}
          </code>
        </CodeBox>
        <div className="w-full flex flex-wrap">
          <div className="ButtonWrapper">
            <div
              className="ButtonSmall flex items-center justify-center"
              onClick={isCopied}
            >
              {codeRef.current ? (
                <Clipboard
                  data-clipboard-text={`
                    export const Button = () => { 
                      return  <button className="${color} ${borderWidth} ${borderColor} ${borderRadius} ${textColor} py-2 px-4">Button</button>
                    }
                  `}
                >
                  Copy Code
                </Clipboard>
              ) : (
                <Clipboard data-clipboard-text={initialCode}>
                  Copy Code
                </Clipboard>
              )}
            </div>
          </div>
          <div className="ButtonWrapper">
            <ButtonSmall button="Clear All" onClick={getClear} />
          </div>
          <div className="ButtonWrapper">
            <ButtonSmall
              button="Sign Out"
              onClick={(e) => {
                e.preventDefault();
                dispatch(signOut());
              }}
            />
          </div>
          <div className="ButtonWrapper">
            <a href="#top">
              <ButtonSmall button="Back to Top" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
