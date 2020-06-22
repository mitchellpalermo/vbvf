import React from "react";
import { Nav, NavLink } from "reactstrap";
import "../css/about-menu.scss";

const AboutMenu = () => {
  return (
    <div className="about-menu">
      <Nav>
        <NavLink activeClassName="active" href="/about/faq">
          FAQ
        </NavLink>
        <NavLink activeClassName="active" href="/about/leadership">
          Leadership
        </NavLink>
        <NavLink activeClassName="active" href="/about/our-story">
          Our Story
        </NavLink>
        <NavLink activeClassName="active" href="/about/beliefs">
          Our Beliefs
        </NavLink>
      </Nav>
    </div>
  );
};
export default AboutMenu;
