import React from "react";
import "../css/button.scss";

const Button = (props) => {
  return (
    <button className="style-me" onClick={props.buttonFunc}>
      {props.title}
    </button>
  );
};
export default Button;
