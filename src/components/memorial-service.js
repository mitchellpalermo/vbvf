import React from "react";

import "../css/stream.scss";
import "../css/memorial-service.scss";
import ConnectWidget from "./connect-widget";

export default function MemorialService(props) {
  return (
    <div className="stream">
      <div className="stream-video-player">
        <iframe
          title="Memorial Service for Stephen Armstrong"
          src="https://vimeo.com/event/1105908/embed"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="stream-supporting-materials">
        <ConnectWidget />

        <div className="memorial-info">
          <h2>Celebration of life for Stephen Armstrong</h2>

          <span id="streaming-difficulties">
            If you're experiencing streaming difficulties,{" "}
            <a href="https://www.facebook.com/vbvfellowship">
              please watch the Facebook Live stream here.
            </a>
          </span>

          <h3>Service Program</h3>
          <ul>
            <li>
              Welcome - <i>Pastor Wesley Livingston</i>
            </li>
            <li>
              Opening Prayer - <i>Pastor Mike Morris</i>
            </li>
            <li>
              Worship - <i>Charlie & Amy Haley</i>
            </li>
            <li>
              Elder Board Remarks - <i>Bob Butler</i>
            </li>
            <li>
              VBVMI Remarks - <i>Greg Driver</i>
            </li>
            <li>
              Oak Hill Bible Church | Austin, TX - <i>Kirk Cameron</i>
            </li>
            <li>
              Moving Forward - <i>Jim Rowland</i>
            </li>
            <li>
              Worship - <i>Charlie & Amy Haley</i>
            </li>
            <li>
              Closing Prayer - <i>Jerry Dyke</i>
            </li>
            <li>
              Dismissal - <i>Pastor Wesley Livingston</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
