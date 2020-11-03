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
    <a
      target={props.link?.includes("churchcenter") ? "_blank" : null}
      href={props.link ? props.link : "#0"}
    >
      <button className={`button ${size()}`} onClick={props.buttonFunc}>
        {props.title}
      </button>
    </a>
  );
};
export default Button;
