import React from "react";
import { Link } from "react-router-dom";
import "../css/stream.scss";

import ConnectWidget from "../components/connect-widget";
import Button from "./button";

export default function Stream(props) {
  return (
    <div className="stream">
      <div className="stream-video-player">
        <iframe
          title={props.title}
          src={props.streamUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="stream-supporting-materials">
        <ConnectWidget />
        <div className="stream-supporting-materials-from-cms">
          <h2>{props.title}</h2>
          {props.notesUrl && (
            <div className="documents">
              <Button
                title="Sermon Notes"
                size="md"
                color="green"
                buttonFunc={() => window.open(props.notesUrl)}
              />
              <Button
                title="Application Questions"
                size="md"
                color="green"
                buttonFunc={() => window.open(props.questionUrl)}
              />
            </div>
          )}
          <p>{props.description}</p>
          {props.seriesLink && (
            <Link to={props.seriesLink}>Watch the rest of this series</Link>
          )}
        </div>
      </div>
    </div>
  );
}
