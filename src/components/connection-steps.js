import React from "react";
import Button from "./button";
import "../css/connection-steps.scss";

export default function ConnectionStep(props) {
  return (
    <div className="step-container">
      <p>{props.copy}</p>
      <Button
        size="medium"
        color="green"
        title={props.buttonText}
        link={props.link}
      />
    </div>
  );
}
