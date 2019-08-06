import React from "react";
import "../css/home.css";
import Button from "../components/button";
import ConnectionImage from "../images/Connection_Meeting_Square.jpg";
import PreachingTheWord from "../images/preaching_the_word.png";
import EndTimesPromo from "../images/end_times_promo.jpg";
import MatthewBackground from "../images/matthew_background.jpg";
import CrownOfThorns from "../images/matthew_crown.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="main-header">
        <div className="titles">
          <h1>Come find what you've been missing</h1>

          <div className="buttons">
            <h2>John 1:1</h2>
            <Button title="What to expect" />
          </div>
        </div>
        <span className="see-more-arrow" />
      </div>
      <div className="secondary-content">
        <div className="connection-meeting content-block">
          <div className="words">
            <h2>Connection Meeting</h2>
            <p>
              Learn about our vision, beliefs and how you can join in our
              journey. Attend a connect meeting to learn how to make VBVF your
              church. <Link to="about/">Learn More</Link>
            </p>
          </div>
          <img src={ConnectionImage} />
        </div>
        <div className="heard-on-radio content-block">
          <img src={PreachingTheWord} />
          <div className="words">
            <h2>Heard us on the Radio?</h2>
            <h3>
              Gospel of Matthew on AM 630
              <br />
              Monday-Friday at 6:30pm
            </h3>
            <p>
              VBVF has a heart to see all of San Antonio understanding the word
              of God, so we’re Preaching the Word on KSLR AM630. Click the
              button below if want to hear more of our current series on the
              book of Matthew.
              <Link to="redirect/"> Listen to Matthew series</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="full-width-promos">
        <div className="end-times-promo-container">
          <span className="end-times-button">
            <Button title="Learn More" />
          </span>
          <img
            src={EndTimesPromo}
            alt="End Times Study Beginning September 10, 2019"
          />
        </div>
        <div className="current-series-promo-container">
          <span className="current-series-desc">
            <h2>Current Series</h2>
            <p>
              As we present this important book, we’ll give careful attention to
              the details without losing sight of Matthew’s major ideas and
              themes. Together with our previous studies in Luke and John, we’re
              rounding out the full story of Jesus’ arrival and work on earth.
              Every Christian can profit from such a grounding.
            </p>
            <Button
              href="https://www.versebyverseministry.org/bible-studies/gospel-of-matthew"
              title="Listen to Matthew Series"
            />
          </span>
          <img src={CrownOfThorns} />
        </div>
      </div>
    </div>
  );
};

export default Home;
