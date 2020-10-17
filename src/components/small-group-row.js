import React from "react";
import "../css/small-group-row.scss";
import axios from "axios";

export default function SmallGroupRow(props) {
  return (
    <div className="row">
      <img src={props.image} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>
          {props.meetingTime.split(" ")[0] +
            " at " +
            props.meetingTime.split(" ")[1]}
        </p>
        <p>{props.meetingLocation}</p>
      </div>
    </div>
  );
}
