import React from "react";
import "../css/home.scss";
import Button from "../components/button";

import CrownOfThorns from "../images/home_page/matthew_crown.png";
import { Link } from "react-router-dom";

import SecondSamuel from "../images/home_page/2_Samuel.jpg";
import WomensStudy from "../images/home_page/womensStudy.jpg";
import Serving from "../images/home_page/serving.jpg";
import MeetandGreet from "../images/home_page/MeetandGreet.jpg";

import Preview from "../components/preview";

const Home = () => {
  return (
    <div>
      <div className="midweek">Midweek services will resume on January 6th</div>
      <div className="main-header">
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
              size="small"
              link={`/bible-studies/2-Samuel`}
            />
          </span>
        </div>
        <div className="series-promo" id="matthew-series">
          <span className="series-promo-desc">
            <h2>Current series</h2>
            <h3>Sundays at 9:00am and 11:00am</h3>
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
              <Button size="small" title="Listen to Matthew" />
            </Link>
          </span>
          <img loading="lazy" src={CrownOfThorns} alt="crown of thorns" />
        </div>
      </div>
    </div>
  );
};

export default Home;
