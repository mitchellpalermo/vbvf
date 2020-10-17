import React from "react";
import "../css/attend-service.scss";
import { Link } from "react-router-dom";
import { getMobileOperatingSystem } from "../util/index";
import Exclamation from "../images/exclamation-solid.svg";
export default function AttendService() {
  const churchCenterLink = () => {
    if (getMobileOperatingSystem() === "iOS") {
      return `itms-apps://apps.apple.com/us/app/church-center-app/id1357742931`;
    } else if (getMobileOperatingSystem() === "Android") {
      return `https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter`;
    } else {
      return "https://vbvf.churchcenter.com/check-ins";
    }
  };
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
        <h4>Childcare</h4>
        <p>
          Our 9:00am service will have childcare available for all ages. For the
          time being, our 11:00am service will only provide childcare for
          children 2 and under.{" "}
        </p>
        <div className="attend-desc-childrens">
          <img src={Exclamation} />
          <p>
            Due to COVID precautions, space in our children's area is limited.
            For now we're asking that all children are checked in before
            service.
          </p>{" "}
        </div>
        <p>
          Please check your child in using the{" "}
          <a href={churchCenterLink()}>Church Center App</a>. Registration opens
          1 hour before service begins. If your child has never been to Journey
          Kids before, please{" "}
          <a href="https://vbvf.churchcenter.com/registrations/events/588010">
            pre-register them here
          </a>
          .
        </p>
        <h4>Safety Protocols</h4>
        <p>
          Attendees at our in-person services are asked to follow appropriate
          safety measures, including wearing masks when not seated (for 5yrs and
          older), social distancing in the building and proper sanitizing
          practices. We also feature safety seating in our Worship Center for
          high-risk individuals who desire further distancing and a private
          entry to our building.
        </p>
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
