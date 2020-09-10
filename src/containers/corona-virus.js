import React from "react";
import "../css/corona-virus.scss";
import { Link } from "react-router-dom";

export default function CoronaVirus() {
  return (
    <div className="corona">
      <h1>
        <span id="highlight">Verse by Verse Fellowship</span> <br />
        Regathering Updates
      </h1>

      <div className="corona-desc">
        <p>
          The elders of Verse By Verse Fellowship are pleased to announce that
          we will open our facility for in-person events beginning September
          8th. Please consider joining us at our location at 551 E Nakoma for
          one of the following upcoming events:
        </p>
        <ul>
          <li>
            <h5>Women’s Bible Study</h5> <h6>Teaching in Ecclesiastes</h6>
            <p>
              Tuesdays at 10:00 AM <br /> September 8th
            </p>
          </li>
          <li>
            <h5>Adult Midweek Bible Study</h5>
            <h6> Teaching in 2 Samuel</h6>
            <p>
              Wednesdays at 7:00 PM <br /> September 9th
            </p>
          </li>
          <li>
            <h5>Weekend Worship Service</h5>
            <h6>Teaching in Matthew</h6>
            <p>
              Sundays at 10:30 AM <br />
              September 20th
            </p>
          </li>
        </ul>
        <p>
          All these events are free and open to the public with no advance
          registration required. Our facility will observe social distancing and
          masks when not seated for all events. We also feature safety seating
          in our Worship Center for high-risk individuals who desire future
          distancing and a private entry to our building.{" "}
        </p>
        <p>
          We will continue to <Link to="/livestream">livestream</Link> our
          weekend worship service on Sundays at 10:30 AM and our midweek Bible
          study on Tuesday nights at 7:00 PM. You can also check out all of our
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
