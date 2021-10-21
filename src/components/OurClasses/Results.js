/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} >
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
