import React from "react";
import FacebookLogo from "../images/logos/facebook_logo.png";
import InstagramLogo from "../images/logos/instagram_logo.png";
import "../css/footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>Follow VBVF Online</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/vbvfellowship/">
          <img src={FacebookLogo} alt="Facebook Logo" />
        </a>
        <a href="https://www.instagram.com/versebyversefellowship/">
          <img src={InstagramLogo} alt="Instagram Logo" />
        </a>
      </div>
      <ul className="footer-disclosures">
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </li>
      </ul>

      <p className="footer-copyright">&#169; 2019 Verse By Verse Fellowship</p>
    </div>
  );
};

export default Footer;
