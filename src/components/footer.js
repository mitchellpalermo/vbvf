import React from "react";
import FacebookLogo from "../images/f_logo_RGB-Black_100.png";
import "../css/footer.css";
import PrivacyPolicy from "./privacy-policy";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import TermsConditions from "./terms-conditions";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>Follow us online</p>
      <div className="icon-container">
        <a href="https://www.facebook.com/vbvfellowship/">
          <img src={FacebookLogo} alt="Facebook Logo" />
        </a>
        <a href="https://www.instagram.com/versebyversefellowship/">
          <img src={FacebookLogo} alt="Instagram Logo" />
        </a>
      </div>

      <Router>
        <ul className="disclosure-container">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsConditions} />
        </Switch>
      </Router>
      <p className="copyright">&#169; 2019 Verse By Verse Fellowship</p>
    </div>
  );
};

export default Footer;
