import React, { useState, useEffect, useRef } from "react";
import "../css/photo-title.scss";
import Skeleton from "react-loading-skeleton";

export default function PhotoTitle(props) {
  const [loaded, setLoaded] = useState(false);

  const image = useRef();

  useEffect(() => {
    if (image.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <div className="person">
      {loaded ? null : <Skeleton width={300} height={400} />}
      <img
        ref={image}
        onLoad={() => setLoaded(!loaded)}
        style={loaded ? { display: "inline-block" } : { display: "none" }}
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
