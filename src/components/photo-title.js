import React, { useState, useRef } from "react";
import "../css/photo-title.scss";
import Skeleton from "react-loading-skeleton";

export default function PhotoTitle(props) {
  const [loaded, setLoaded] = useState(false);

  const image = useRef(this);

  const isComplete = () => {
    setLoaded(true);
    return image.current.complete ? true : false;
  };

  function onLoad() {
    if (image.current.complete) {
      setLoaded(true);
    }
  }
  console.log(props);
  return (
    <div className="person">
      <img
        loading={props.role === "Elder" ? "eager" : "lazy"}
        src={props.photo}
        alt={props.name}
      />
      <p>
        {props.name}
        {props.title ? <span>{props.title}</span> : <span></span>}
        {props.role ? <span>{props.role}</span> : <span></span>}
        {props.email ? <span>{props.email}</span> : <span></span>}
      </p>
    </div>
  );
}
