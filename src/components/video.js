import React from "react";
import "../css/video.scss";

export default function Video(props) {
  return (
    <div className="video">
      <iframe
        title="Embedded Video"
        width="853"
        height="480"
        src={`https://player.vimeo.com/video/${props.videoId}?color=ffffff&title=0&byline=0&portrait=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
