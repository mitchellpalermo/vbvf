import React, { useState, useEffect } from "react";
import "../css/home.scss";

import { Button } from "reactstrap";
import ConnectionImage from "../images/Connection_Meeting_Square.jpg";
import CrownOfThorns from "../images/matthew_crown.png";
import { Link } from "react-router-dom";
import MissionBanner from "../components/mission-banner";

import { sanity } from "../util/index";

const Home = () => {
  const [series, setSeries] = useState({});
  const ephesiansQuery = `*[_type == "series" && title == "Ephesians"]{
  title,
  description
}`;

  useEffect(() => {
    sanity.fetch(ephesiansQuery).then((series) => setSeries(series[0]));
  }, [ephesiansQuery]);

  return (
    <div>
      <div className="main-header">
        <div className="main-header-titles">
          <h1>
            Welcome Back
            <h2 style={{ fontWeight: "500" }}>
              Weekend services starting September 20th
            </h2>
          </h1>

          <div className="main-header-buttons">
            <div className="button">
              <Button href="/livestream" color="light">
                View Livestream
              </Button>
            </div>
            <div className="button">
              <Button href="/corona-virus" color="light">
                Regathering Details
              </Button>
            </div>
          </div>
        </div>
        <span className="see-more-arrow" />
      </div>
      <MissionBanner />
      <div className="secondary-content">
        <div id="connection-meeting" className="secondary-content-block">
          <div className="secondary-content-block-words">
            <h2>Connection Meeting</h2>
            <p>
              Learn about our vision, beliefs and how you can join in our
              journey. Attend a connect meeting to learn how to make VBVF your
              church. <Link to="connect/">Learn More</Link>
            </p>
          </div>
          <img
            loading="lazy"
            src={ConnectionImage}
            alt="connection meeting logo"
          />
        </div>
      </div>
      <div>
        <div className="series-promo" id="ephesians-series">
          <span className="series-promo-desc">
            <h2>{series.title} Study</h2>
            {/* <img alt="" src={ChurchIcon} /> */}
            <p>{series.description}</p>
            <Button
              outline
              color="light"
              href={`/bible-studies/${series.title}`}
            >
              Listen to {series.title}
            </Button>
          </span>
        </div>
        <div className="series-promo" id="matthew-series">
          <span className="series-promo-desc">
            <h2>Current Series</h2>
            <p>
              As we present this important book, we’ll give careful attention to
              the details without losing sight of Matthew’s major ideas and
              themes. Together with our previous studies in Luke and John, we’re
              rounding out the full story of Jesus’ arrival and work on earth.
              Every Christian can profit from such a grounding.
            </p>
            <Link
              to={{
                pathname: "/sermon-redirect",
                deepDive: "bible-studies/gospel-of-matthew",
              }}
            >
              <Button outline color="light">
                Listen to Matthew
              </Button>
            </Link>
          </span>
          <img loading="lazy" src={CrownOfThorns} alt="crown of thorns" />
        </div>
      </div>
    </div>
  );
};

export default Home;
