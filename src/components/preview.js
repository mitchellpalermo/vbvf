import React from "react";
import Button from "./button";
import "../css/preview.scss";

export default function Preview(props) {
  return (
    <div className="preview">
      <img src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <Button size="medium" link={props.link} title={props.buttonTitle} />
    </div>
  );
}
