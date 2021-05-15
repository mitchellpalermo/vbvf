import React from "react";
import "../css/home.scss";
import Button from "../components/button";
import PhillippiansText from "../images/home_page/phillippians_text.png";

import WomensStudy from "../images/home_page/womensStudy.jpg";
import DailyBread from "../images/home_page/daily_bread.jpg";
import MeetandGreet from "../images/home_page/MeetandGreet.jpg";

import Preview from "../components/preview";
import AlertBubble from "../components/alert-bubble";
import { livestreamHappeningNow } from "../util";

const liveStreamButtonText = () => {
  if (livestreamHappeningNow()) {
    return "View livestream";
  } else {
    return "View past services";
  }
};

const Home = () => {
  return (
    <div className="home">
      <div className="main-header">
        <AlertBubble />
        <div className="main-header-titles">
          <h1>Find hope in the Word</h1>
          <h2>John 1:1</h2>
          <div className="main-header-buttons">
            <Button
              link="/livestream"
              title={liveStreamButtonText()}
              size="large"
              color="bone"
            />
            <Button
              title="Attend a service"
              link="/attend"
              size="large"
              color="bone"
            />
          </div>
        </div>
      </div>

      <div className="preview-container">
        <Preview
          title="Women's Bible Study"
          body="Join us for a study through the book of Esther. Meeting on Tuesdays at 10am in the Flex Room."
          buttonTitle="Listen to Bible teaching"
          link="/bible-studies/Esther"
          image={WomensStudy}
        />
        <Preview
          title="Announcements"
          body="Check out what's happening at Verse by Verse Fellowship."
          buttonTitle="View Announcements"
          link="/announcements"
          image={DailyBread}
        />
        <Preview
          title="Connect with us"
          body="Hear about our vision, beliefs and how you can join in our
              journey. Visit our Connect Page to learn how you can make VBVF
              your church."
          buttonTitle="Learn more"
          link="/connect"
          image={MeetandGreet}
        />
      </div>

      <div>
        <div className="series-promo" id="phillippians-series">
          <span className="series-promo-desc">
            <img loading="lazy" src={PhillippiansText} alt="" />
            <h3>Sundays at 9:00am and 11:00am</h3>
            <p>
              Joy in the midst of suffering is the paradoxical experience of
              every Christian. Our sinful world induces suffering at every turn,
              it seems, yet Christians remain resolute in their hope for good
              things to come. This is the central message of Paul's letter to
              Philippi.
            </p>

            <Button
              size="medium"
              color="bone"
              link="bible-studies/Philippians"
              title="Listen to Philippians"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
