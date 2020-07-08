import React from "react";
import { Link } from "react-router-dom";
import "../css/not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>
        This means that we couldn't find what you're looking for. Sorry about
        that.
      </h3>
      <p>
        These are some of the most popular pages on our site, maybe you were
        looking for one of these?
      </p>
      <ul>
        <li>
          <Link to="/bible-studies/">Bible study media</Link>
        </li>
        <li>
          <Link to="about/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/livestream">Livestream</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
