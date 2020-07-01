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
          Given the continuing increase in COVID-19 cases in Bexar County, VBVF
          has suspended all public meetings in our building until further
          notice. We believe waiting until the pandemic is under control is in
          the best interests of our church body and the city of San Antonio.
        </p>
        <p>
          Meanwhile, we encourage you to continue worshiping with us remotely by
          taking part in the weekly <Link to="/livestream">livestreams</Link> of
          both our weekend worship service on Sundays at 10:30 AM and our
          midweek Bible study in Ephesians on Tuesday nights at 7:00 PM. You can
          also check out all of our previous and current bible studies{" "}
          <Link to="/bible-studies">here</Link>.
        </p>
        <p>
          Please visit this page anytime for the latest information on our
          reopening plans.
        </p>
      </div>
    </div>
  );
}
