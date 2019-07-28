import React, { useState } from "react";
import "../css/button.css";

const Button = props => {
  const [isShowing, setShowing] = useState(false);

  const toggle = () => {
    setShowing(!isShowing);
  };

  return (
    <button
      className="button-housing"
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      {props.title} <span className={isShowing ? "showing" : null} />
    </button>
  );
};
export default Button;
