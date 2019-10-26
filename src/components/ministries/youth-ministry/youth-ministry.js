import React from "react";
import LogosLogo from "../../../images/logos/logos-logo.png";
import YouthPhotoCarousel from "./youth-photo-carousel";
import "../../../css/youth-ministry.scss";
import FacebookIcon from "../../../images/logos/facebook_logo.png";

export default function YouthMinistry() {
  return (
    <div className="youth-page-container">
      <img
        className="ministry-logo"
        src={LogosLogo}
        alt="Logos Student Ministry Logo"
      />

      <YouthPhotoCarousel />
      <div className="youth-description-container">
        <h2>What is Logos?</h2>
        <p className="description-section">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          massa vitae tortor condimentum lacinia quis vel eros. Nulla facilisi
          morbi tempus iaculis urna id. Id eu nisl nunc mi ipsum. In hac
          habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor
          posuere ac ut consequat semper viverra.
        </p>

        <h3>
          Meeting time <br />
          Tuesdays @ 6:30pm <br />
          Flex Room
        </h3>
        <div className="social-media-section">
          <h3>Logos Ministry Social Media</h3>
          <div className="icon-section">
            <a href="">
              <img src={FacebookIcon} />
            </a>
            <a href="">
              <img src={FacebookIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
