import React from "react";
import "../css/home.scss";
import Button from "../components/button";
import PhillippiansText from "../images/home_page/phillippians_text.png";
import { Link } from "react-router-dom";

import SecondSamuel from "../images/home_page/2_Samuel.jpg";
import WomensStudy from "../images/home_page/womensStudy.jpg";
import Serving from "../images/home_page/serving.jpg";
import MeetandGreet from "../images/home_page/MeetandGreet.jpg";

import Preview from "../components/preview";

const Home = () => {
  return (
    <div>
      <div className="main-header">
        <div id="notice">
          Childcare and midweek services will be suspended for the next two
          weeks. <Link to="/announcement">Learn More</Link>
        </div>
        <div className="main-header-titles">
          <h1>Rejoice in the Word</h1>
          <h2 style={{ color: "white" }}>John 1:1</h2>

          <div className="main-header-buttons">
            <Button link="/livestream" size="medium" title="View livestream" />
            <Button link="/attend" size="medium" title="Attend a service" />
          </div>
        </div>
        <span className="see-more-arrow" />
      </div>

      <div className="preview-container">
        <Preview
          title="Women's Bible Study"
          body="Join us for a study through the book of Ecclesiastes. Meeting on Tuesdays at 10am in the Flex Room."
          buttonTitle="Listen now"
          link="/bible-studies/Ecclesiastes"
          image={WomensStudy}
        />
        <Preview
          title="Serve at VBVF"
          body="God has called us to love one another, and part of that is serving each other. Join a serving team at VBVF to develop relationships and serve the body."
          buttonTitle="Explore Teams"
          link="/ministries/serve"
          image={Serving}
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
        <div className={`series-promo `} id="samuel-series">
          <img src={SecondSamuel} alt="" />

          <span className="series-promo-desc">
            <h2>Mid-week study</h2>
            <h3>Wednesdays at 7:00pm</h3>
            <p>
              The book of second Samuel continues the historical account of
              David's rise as king of Israel. The story picks up where first
              Samuel ends, as David contends with the deaths of Saul and his
              best friend, Jonathan, and the fight for the throne of Israel
              begins. The book traces the rise of David to power, his fall into
              temptation and the discipline of the Lord, and his renewal as a
              man after God's own heart.{" "}
            </p>
            <Button
              title={`Listen to 2 Samuel`}
              size="medium"
              link={`/bible-studies/2-Samuel`}
            />
          </span>
        </div>
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
            <Link
              to={{
                pathname: "/sermon-redirect",
                deepDive: "bible-studies/philippians",
              }}
            >
              <Button size="medium" title="Listen to Philippians" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
