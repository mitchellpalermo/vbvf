import React from "react";
import { Nav, NavLink } from "reactstrap";
import "../css/about-menu.scss";

const AboutMenu = () => {
  return (
    <div className="about-menu">
      <Nav>
        <NavLink exact activeClassName="currentlyActive" href="/about/faq">
          FAQ
        </NavLink>
        <NavLink
          exact
          activeClassName="currentlyActive"
          href="/about/leadership"
        >
          Leadership
        </NavLink>
        <NavLink
          exact
          activeClassName="currentlyActive"
          href="/about/our-story"
        >
          Our Story
        </NavLink>
        <NavLink exact activeClassName="currentlyActive" href="/about/beliefs">
          Our Beliefs
        </NavLink>
      </Nav>
    </div>
  );
};
export default AboutMenu;
