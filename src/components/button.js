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
      target={props.link?.includes("churchcenter") ? "_blank" : null} //forcing a new tab to open if link is to church center
      rel="noreferrer"
      href={props.link ?? "#0"}
    >
      <button
        type={props.type ?? ""}
        className={`button ${size()} ${props.color} `}
        onClick={props.buttonFunc}
      >
        {props.title}
      </button>
    </a>
  );
};
export default Button;
