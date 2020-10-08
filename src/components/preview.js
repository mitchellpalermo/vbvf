import React from "react";
import Button from "./button";
import "../css/preview.scss";

export default function Preview(props) {
  return (
    <div className="preview">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <Button />
    </div>
  );
}
