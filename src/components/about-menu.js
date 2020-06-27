import React from "react";
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../css/about-menu.scss";

const AboutMenu = () => {
  return (
    <div className="about-menu">
      <Nav>
        <NavLink exact activeClassName="active" to="/about/faq">
          FAQ
        </NavLink>
        <NavLink exact activeClassName="active" to="/about/leadership">
          Leadership
        </NavLink>
        <NavLink exact activeClassName="active" to="/about/our-story">
          Our Story
        </NavLink>
        <NavLink exact activeClassName="active" to="/about/beliefs">
          Our Beliefs
        </NavLink>
      </Nav>
    </div>
  );
};
export default AboutMenu;
