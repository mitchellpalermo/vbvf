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
            <a
              href="https://vbvf.churchcenter.com/groups/bible-studies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bible Studies
            </a>
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
          <div className="mobile-menu-bar">
            <Link to="/">
              <img
                className="mobile-menu-icon"
                src={MenuIcon}
                alt="VBVF Logo"
                onClick={() => {
                  setShowCollapsedMenu(!showCollapsedMenu);
                }}
              />
            </Link>
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
          </div>
          <div
            id="expanded-menu"
            className={`${showCollapsedMenu ? "show" : "hide"}`}
          >
            <ul>
              <li>
                <Link
                  to="/service-time-directions"
                  onClick={() => {
                    setShowCollapsedMenu(!showCollapsedMenu);
                  }}
                >
                  Service Time & Location
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    setShowCollapsedMenu(!showCollapsedMenu);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  onClick={() => {
                    setShowCollapsedMenu(!showCollapsedMenu);
                  }}
                >
                  Ministries
                </Link>
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
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
