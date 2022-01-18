import React from "react";
import "../css/attend-service.scss";
import { Link } from "react-router-dom";

export default function AttendService() {
  return (
    <div className="attend">
      <h1>
        Attending a Service <br />
        <span id="highlight">Verse by Verse Fellowship</span>
      </h1>

      <div className="attend-desc">
        <h4>Service times and Location</h4>
        <p>
          VBVF holds worship services at our building at 551 E. Nakoma on
          Sundays at 9:00am and 11:00am. Our worship service consists of live,
          contemporary worship music and verse-by-verse Bible preaching.
        </p>
        <h4>Children's Ministry</h4>
        <p>Both our services will have childcare available for all ages. </p>

        <h4>Safety Protocols</h4>
        <p>Masks are now optional in all areas.</p>
        <h4>Livestream</h4>
        <p>
          We will <Link to="/livestream">livestream</Link> our weekend worship
          service on Sundays at 11:00 AM and our midweek Bible study on
          Wednesday nights at 7:00 PM. You can also check out all of our
          previous and current bible studies{" "}
          <Link to="/bible-studies">here</Link>.
        </p>
        <p>
          For more information, please contact the church at info@vbvf.org or
          call 210-460-7556.
        </p>
      </div>
    </div>
  );
}
