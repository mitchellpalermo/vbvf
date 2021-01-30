import React from "react";
import { Link } from "react-router-dom";
import "../css/stream.scss";
import "../css/memorial-service.scss";
import ConnectWidget from "./connect-widget";

export default function MemorialService(props) {
  return (
    <div className="stream">
      <div className="stream-video-player">
        <iframe
          title="Memorial Service for Stephen Armstrong"
          src="https://vimeo.com/event/51649/embed"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="stream-supporting-materials">
        <ConnectWidget />

        <div className="memorial-info">
          <h2>Memorial for Stephen Armstrong</h2>

          <span id="streaming-difficulties">
            If you're experiencing streaming difficulties,{" "}
            <a href="https://www.facebook.com/vbvfellowship">
              please watch the Facebook Live stream here.
            </a>
          </span>

          <h3>Service Program</h3>
          <ul>
            <li>
              Welcome & Prayer - <i>Josh De Koning</i>
            </li>
            <li>
              Scripture Readings - <i>Bob Butler</i>
            </li>
            <li>
              Eulogy from the family - <i>Stephen's Children</i>
            </li>
            <li>
              Eulogy from a friend - <i>Jerry Dyke</i>
            </li>
            <li>
              Gospel Message | Psalm 116:15 - <i>Josh De Koning</i>
            </li>
            <li>
              Worship - <i>Charlie & Amy Haley</i>
            </li>
            <li>
              Flag Ceremony - <i>U.S. Air Force Personnel</i>
            </li>
            <li>
              Closing Prayer - <i>Josh De Koning</i>
            </li>
          </ul>
          <p>
            In lieu of flowers, the family has requested{" "}
            <Link to="/giving">donations be made to VBVF.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
