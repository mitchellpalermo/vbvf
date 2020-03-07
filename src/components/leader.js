import React from "react";
import "../css/leader.scss";

export default function Leader(props) {
  return (
    <div className="leader">
      <h3 className="leader-name">{props.name}</h3>
      <img className="leader-photo" src={props.photo} />
    </div>
  );
}
