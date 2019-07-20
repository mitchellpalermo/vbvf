import React from "react";
import "../css/photo-title.css";

export default function PhotoTitle(props) {
  return (
    <div className="person">
      <img src={props.photo} alt={props.name} />
      <p>
        {props.name}
        <span>{props.title}</span>
      </p>
    </div>
  );
}
