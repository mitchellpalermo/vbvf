import React from "react";
import "../css/button.scss";

const Button = (props) => {
  const size = () => {
    return props.size === "small"
      ? "sm"
      : props.size === "medium"
      ? "md"
      : props.size === "large"
      ? "lg"
      : "";
  };

  return (
    <button className={`button ${size()}`} onClick={props.buttonFunc}>
      {props.title}
    </button>
  );
};
export default Button;
