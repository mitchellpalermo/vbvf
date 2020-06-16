import React from "react";
import "../css/leader.scss";

export default function Leader(props) {
  return (
    <div className="leader">
      <h3 className="leader-name">{props.name}</h3>
      {props.title ? <h4>{props.title}</h4> : null}
      {props.email ? <h4>{props.email}</h4> : null}
      <img
        alt={"Photo of " + props.name}
        className="leader-photo"
        src={props.photo}
      />
    </div>
  );
}
