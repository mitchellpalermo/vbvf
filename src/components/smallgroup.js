import React from "react";
import "../css/smallgroup.scss";

export default function SmallGroup(props) {
  return (
    <div className="small-group">
      <img src={props.image} alt="" />
      <h3>{props.names}</h3>
      <p>{props.meetingTime}</p>
      <p>{props.meetingLocation}</p>
    </div>
  );
}
