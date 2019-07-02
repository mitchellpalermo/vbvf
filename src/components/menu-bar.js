import React from "react";

import "../css/menu-bar.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../containers/home";
import ServiceTimeDirections from "../containers/service-time-directions";
import About from "../containers/about";
import Ministries from "../containers/ministries";

import NotFound from "../containers/notfound";
import SermonRedirect from "../containers/sermon-redirect";

function MenuBar() {
  return (
    <Router>
      <div>
        <div className="menu-bar">
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/service-time-directions"
            component={ServiceTimeDirections}
          />
          <Route path="/about" component={About} />
          <Route path="/ministries" component={Ministries} />
          <Route path="/sermon-redirect" component={SermonRedirect} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default MenuBar;
