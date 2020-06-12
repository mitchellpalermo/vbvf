import React from "react";
import "../css/livestream.scss";
import { Link } from "react-router-dom";

export default function livestream() {
  let today = new Date();

  const contStyle = {
    padding: "56.25% 0 0 0",
    position: "relative",
  };
  const vidStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const sundayStream = (
    <div style={contStyle}>
      <iframe
        src="https://vimeo.com/event/51649/embed"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        style={vidStyle}
      ></iframe>
    </div>
  );
  const tuesdayStream = (
    <div style={contStyle}>
      <iframe
        src="https://vimeo.com/event/49116/embed"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        style={vidStyle}
      ></iframe>
    </div>
  );

  return (
    <div className="livestream">
      <h1>Livestream</h1>
      <div className="livestream-video">
        {today.getDay() == 2 ? tuesdayStream : sundayStream}
      </div>
      <p className="livestream-body">
        Verse by Verse Fellowship livestreams its Tuesday and Sunday services.
        Recordings of these services are available on our{" "}
        <Link to="/bible-studies">Bible Studies</Link> page.
      </p>
    </div>
  );
}
