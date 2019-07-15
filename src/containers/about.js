import React, { useState } from "react";
import OurStory from "../components/our-story";
import Beliefs from "../components/beliefs";
import Leadership from "../components/leadership";
import FAQ from "../components/faq";
import "../css/about.css";

const About = () => {
  const [component, setComponent] = useState(<OurStory />);

  const handleClick = nextComponent => {
    setComponent(nextComponent);
  };
  return (
    <div>
      <div className="header-container">
        <h1>About</h1>
      </div>
      <div className="about-container">
        <div className="side-menu">
          <ul>
            <li>
              <a onClick={() => setComponent(<OurStory />)}>Our Story</a>
            </li>
            <li>
              <a onClick={() => setComponent(<Beliefs />)}>
                Core Values & Beliefs
              </a>
            </li>
            <li>
              <a onClick={() => setComponent(<Leadership />)}>Leadership</a>
            </li>
            <li>
              <a onClick={() => setComponent(<FAQ />)}>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="display-component">{component}</div>
      </div>
    </div>
  );
};

export default About;
