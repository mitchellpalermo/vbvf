import React, { useEffect, useState } from "react";
import "../css/sermon-redirect.scss";
import VbvfLogo from "../images/logos/vbvf_logo_full.png";
import RegistrationsLogo from "../images/logos/registrations_logo.png";
import Arrow from "../images/arrow-thick-right.svg";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const RegistrationRedirect = (props) => {
  const [counter, setCounter] = useState("10");

  const navigate = useNavigate();
  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : redirect();
  }, [counter]);

  function redirect(path) {
    window.location.replace(
      `https://vbvf.churchcenter.com/registrations/events`
    );
  }

  return (
    <div className="redirect">
      <div className="redirect-desc">
        <h1>You are now leaving Verse by Verse Fellowship</h1>
        <p>
          You're being transferred to our event portal. When you're finished,
          you may hit the back button to come back to Verse by Verse
          Fellowship's site. Please click the cancel button below if you would
          like to stay here.
        </p>
      </div>
      <div className="redirect-buttons">
        <Button
          size="large"
          color="red"
          buttonFunc={() => navigate(-1)}
          title="Stay Here"
        />{" "}
        <Button
          size="large"
          color="green"
          buttonFunc={() => redirect()}
          title="Proceed"
        />
      </div>
      <div className="redirect-images">
        <img alt="Verse by Verse Fellowship Logo" src={VbvfLogo} />
        <img id="arrow" alt="" src={Arrow} />
        <img alt="Planning Center Registrations Logo" src={RegistrationsLogo} />
      </div>
    </div>
  );
};

export default RegistrationRedirect;
