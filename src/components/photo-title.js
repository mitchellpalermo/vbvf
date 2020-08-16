import React from "react";
import "../css/photo-title.css";

export default function PhotoTitle(props) {
  return (
    <div className="person">
      <img loading={props.isLazy} src={props.photo} alt={props.name} />
      <p>
        {props.name}
        {props.title ? <span>{props.title}</span> : null}
        {props.role ? <span>{props.role}</span> : null}
        {props.email ? <span>{props.email}</span> : null}
      </p>
    </div>
  );
}
