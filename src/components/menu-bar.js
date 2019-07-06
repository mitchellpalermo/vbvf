import "../css/menu-bar.css";
import React from "react";

import { Link } from "react-router-dom";
import MenuIcon from "../images/menu_icon.png";
function MenuBar() {
  return (
    <div className="menu-bar">
      <img src={MenuIcon} alt="VBVF Logo" />
      <ul className="menu-links">
        <li>
          <Link to="/service-time-directions">Service Time & Location</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/ministries">Ministries</Link>
        </li>
        <li>
          <a href="https://vbvf.churchcenter.com/registrations/events">
            Events
          </a>
        </li>
        <li>
          <Link to="/sermon-redirect">Sermons</Link>
        </li>
        <li>
          <Link to="/give">Give</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
