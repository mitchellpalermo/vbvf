import React from "react";
import LogosLogo from "../../images/logos/logos-logo-white.png";
import BibleProject from "../../images/logos/bible-project.png";
import "../../css/youth-ministry.scss";
import FacebookIcon from "../../images/logos/facebook_logo.png";
import YouthImage from "../../images/youth_ministry_header.jpg";
import { Button } from "reactstrap";

export default function YouthMinistry() {
  const videoWidth = () => {
    return window.screen.width * 0.7;
  };

  return (
    <div className="youth-page-container">
      <div className="youth-header">
        <img
          className="ministry-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
      </div>

      <div className="youth-description-container">
        <div className="words-section">
          <h2>Why are we here?</h2>
          <p>
            At Logos we strive to give students a real grasp on scripture. We
            want the students to walk away every week with a little bit of a
            better understanding of scripture and a closer walk with the Lord.
            We are currently working our way through a series titled The Story
            of Scripture.
          </p>
        </div>
        <img src={YouthImage} alt="youth playing gaga ball" />
      </div>
      <div className="bible-project-container">
        <div className="description-section">
          <img src={BibleProject} />
          <div className="words-section">
            <h2>What are we learning?</h2>
            <p>
              We are using the Bible Project videos and material to create an
              overview of scripture. We are looking at overarching story, major
              characters, and how the covenants play out through scripture. We
              are taking it book by book and are doing a rapid tour through
              scripture in hopes of giving students an idea of where they are in
              the story of scripture in any given book.
            </p>
          </div>
        </div>
        <div className="more-lessons-section">
          <div classNam="video-player-container">
            <iframe
              src="https://www.youtube.com/embed/ak06MSETeo4?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <h3>
        Meeting time <br />
        Tuesdays @ 6:30pm <br />
        Flex Room
      </h3>
      <div className="social-media-section">
        <h3>Logos Ministry Social Media</h3>
        <div className="icon-section">
          <a href="">
            <img src={FacebookIcon} />
          </a>
          <a href="">
            <img src={FacebookIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
