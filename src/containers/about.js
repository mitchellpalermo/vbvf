import React, { useState } from "react";
import OurStory from "../components/our-story";
import Beliefs from "../components/beliefs";
import Leadership from "../components/leadership";
import FAQ from "../components/faq";
import "../css/about.css";

const About = () => {
  const [component, setComponent] = useState(<OurStory />);

  const handleClick = (passingComponent, passingClass) => {
    setComponent(passingComponent);

    //removing selected class from button
    let removingClass = document.querySelector(".selected");
    removingClass.classList.remove("selected");

    //adding selected class to button
    let activeButton = document.querySelector(passingClass);
    activeButton.classList.add("selected");
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
                className="our-story selected"
                onClick={() => {
                  handleClick(<OurStory />, ".our-story");
                }}
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                className="beliefs"
                onClick={() => {
                  handleClick(<Beliefs />, ".beliefs");
                }}
              >
                Core Values & Beliefs
              </button>
            </li>
            <li>
              <button
                className="leadership"
                onClick={() => {
                  handleClick(<Leadership />, ".leadership");
                }}
              >
                Leadership
              </button>
            </li>
            <li>
              <button
                className="faq"
                onClick={() => {
                  handleClick(<FAQ />, ".faq");
                }}
              >
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
