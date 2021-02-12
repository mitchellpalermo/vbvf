import React from "react";

export default function VimeoEmbed(props) {
  return (
    <div className="stream-video-player">
      <iframe
        title={props.title}
        src={props.streamUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}
