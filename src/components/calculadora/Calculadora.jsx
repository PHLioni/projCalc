import React from "react";

import "./Calculadora.css";

import Buttons from "./buttons/Buttons";
import Display from "./display/Display";

export default () => {
  return (
    <div>
      <h1 className="container--title">Calculadora</h1>
      <div className="container--calc">
        <Display value={100} />
        <Buttons label="AC" />
        <Buttons label="/" />
        <Buttons label="7" />
        <Buttons label="8" />
        <Buttons label="9" />
        <Buttons label="*" />
        <Buttons label="4" />
        <Buttons label="5" />
        <Buttons label="6" />
        <Buttons label="-" />
        <Buttons label="1" />
        <Buttons label="2" />
        <Buttons label="3" />
        <Buttons label="+" />
        <Buttons label="0" />
        <Buttons label="." />
        <Buttons label="=" />
      </div>
    </div>
  );
};
