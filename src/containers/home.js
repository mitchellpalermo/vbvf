import React from "react";
import "../css/home.scss";

import { Button } from "reactstrap";
import ConnectionImage from "../images/Connection_Meeting_Square.jpg";
import PreachingTheWord from "../images/preaching_the_word.png";
import CrownOfThorns from "../images/matthew_crown.png";
import { Link } from "react-router-dom";
import MissionBanner from "../components/mission-banner";
import BibleStudyContent from "../content/study-content.json";

const Home = () => {
  return (
    <div>
      <div className="main-header">
        <div className="main-header-titles">
          <h1>
            Trust in the Word
            <h2>John 1:1</h2>
          </h1>

          <div className="main-header-buttons">
            <div className="button">
              <Button href="/livestream" color="light">
                View Livestream
              </Button>
            </div>
            <div className="button">
              <Button href="/about" color="light">
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
          <img src={ConnectionImage} alt="connection meeting logo" />
        </div>
        <div className="secondary-content-block">
          <img src={PreachingTheWord} alt="Preaching the word logo" />
          <div className="secondary-content-block-words">
            <h2>Heard us on the Radio?</h2>
            <p style={{ textAlign: "center" }}>
              Gospel of Matthew <br /> on AM 630 <br />
              Monday-Friday at 6:30pm
            </p>
            <p>
              VBVF has a heart to see all of San Antonio understanding the word
              of God, so we’re Preaching the Word on KSLR AM630. Click the
              button below if want to hear more of our current series on the
              book of Matthew.
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.versebyverseministry.org/bible-studies/gospel-of-matthew"
              >
                {" "}
                Listen to Matthew series
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="series-promo" id="ephesians-series">
          <span className="series-promo-desc">
            <h2>Ephesians Study</h2>
            {/* <img alt="" src={ChurchIcon} /> */}
            <p>{BibleStudyContent.studies[0].description}</p>
            <Button outline color="light" href="/bible-studies/ephesians">
              Listen to {BibleStudyContent.studies[0].name}
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
            <Button
              outline
              color="light"
              href="https://www.versebyverseministry.org/bible-studies/gospel-of-matthew"
              target="_blank"
            >
              Listen to Matthew
            </Button>
          </span>
          <img src={CrownOfThorns} alt="crown of thorns" />
        </div>
      </div>
    </div>
  );
};

export default Home;
