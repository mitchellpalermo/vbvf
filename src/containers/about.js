import React, { useState } from "react";
import OurStory from "../components/our-story";
import Beliefs from "../components/beliefs";
import Leadership from "../components/leadership";
import FAQ from "../components/faq";
import "../css/about.css";
import ReactDOM from "react-dom";

const About = () => {
  const [component, setComponent] = useState(<OurStory />);

  const handleClick = (component, passingClass) => {
    setComponent(component);

    let bigDocument = ReactDOM.findDOMNode(this);
    console.log("this is the passing class: " + passingClass);
    let activeButton = bigDocument.querySelector(passingClass);
    activeButton.classList.add("active");
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
              <button
                className="our-story"
                onClick={handleClick(<OurStory />, "our-story")}
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                className="values-beliefs"
                onClick={() => setComponent(<Beliefs />)}
              >
                Core Values & Beliefs
              </button>
            </li>
            <li>
              <button
                className="leadership"
                onClick={() => setComponent(<Leadership />)}
              >
                Leadership
              </button>
            </li>
            <li>
              <button className="faq" onClick={() => setComponent(<FAQ />)}>
                FAQ
              </button>
            </li>
          </ul>
        </div>
        <div className="display-component">{component}</div>
      </div>
    </div>
  );
};

export default About;
