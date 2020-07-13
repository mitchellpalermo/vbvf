import React from "react";
import "../css/button.css";

const Button = (props) => {
  return <button onClick={props.buttonFunc}>{props.title}</button>;
};
export default Button;
