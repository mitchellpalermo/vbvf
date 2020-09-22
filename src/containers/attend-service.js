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
        <p>
          Verse By Verse Fellowship is now conducting in-person worship services
          at our building at 551 E. Nakoma on Sundays at 10:30 AM. Our worship
          service consists of live, contemporary worship music and
          verse-by-verse Bible preaching through the Gospel of Matthew.
        </p>
        <p>
          {" "}
          We currently provide childcare for 2yrs and under, and we hope to
          offer our full children’s program for children 3yrs and older in the
          near future.
        </p>{" "}
        <p>
          Attendees at our in-person services are asked to follow appropriate
          safety measures, including wearing masks when not seated (for 5yrs and
          older), social distancing in the building and proper sanitizing
          practices. We also feature safety seating in our Worship Center for
          high-risk individuals who desire further distancing and a private
          entry to our building.
        </p>
        <h5>
          In addition to our weekend service, we also offer the following
          in-person events at our building:
        </h5>
        <ul>
          <li>
            <h5>Women’s Bible Study</h5> <h6>Teaching in Ecclesiastes</h6>
            <p>Tuesdays at 10:00 AM</p>
          </li>
          <li>
            <h5>Adult Midweek Bible Study</h5>
            <h6> Teaching in 2 Samuel</h6>
            <p>Wednesdays at 7:00 PM</p>
          </li>
          <li>
            <h5>Youth Night (Grades 6-12)</h5>
            <p>Wednesdays at 6:30pm</p>
          </li>
        </ul>
        <p>
          All these events are free and open to the public with no advance
          registration required.
        </p>
        <p>
          We will continue to <Link to="/livestream">livestream</Link> our
          weekend worship service on Sundays at 10:30 AM and our midweek Bible
          study on Wednesday nights at 7:00 PM. You can also check out all of
          our previous and current bible studies{" "}
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
