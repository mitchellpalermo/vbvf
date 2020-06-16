import React from "react";
import { Button } from "reactstrap";
import "../css/connection-steps.scss";

export default function ConnectionStep(props) {
  return (
    <div className="step-container">
      <p>{props.copy}</p>
      <Button outline primary white href={props.link}>
        {props.buttonText}
      </Button>
    </div>
  );
}
