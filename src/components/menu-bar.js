import React, { useState } from "react";
import "../css/menu-bar.css";
import { Link } from "react-router-dom";
import MenuIcon from "../images/vbvf_icon.png";
function MenuBar() {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

  return (
    <div className="menu-bar">
      <div className="full-menu">
        <Link to="/">
          <img src={MenuIcon} alt="VBVF Logo" />
        </Link>
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
            <a
              href="https://vbvf.churchcenter.com/registrations/events"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
          </li>
          <li>
            <Link to="/sermon-redirect">Sermons</Link>
          </li>
          <li>
            <a
              href="https://vbvf.churchcenter.com/giving"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <nav role="navigation">
          <div
            id="menuToggle"
            onClick={() => {
              setShowCollapsedMenu(!showCollapsedMenu);
            }}
          >
            <span />
            <span />
            <span />
          </div>
          <ul
            className={`expanded-menu ${
              showCollapsedMenu ? "active" : "inactive"
            }`}
          >
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
              <a
                href="https://vbvf.churchcenter.com/registrations/events"
                target="_blank"
                rel="noopener noreferrer"
              >
                Events
              </a>
            </li>
            <li>
              <Link to="/sermon-redirect">Sermons</Link>
            </li>
            <li>
              <a
                href="https://vbvf.churchcenter.com/giving"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
