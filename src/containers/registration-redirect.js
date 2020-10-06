import React, { useEffect, useState } from "react";
import "../css/sermon-redirect.scss";
import VbvfLogo from "../images/logos/vbvf_logo_full.png";
import RegistrationsLogo from "../images/logos/registrations_logo.png";
import Arrow from "../images/arrow-thick-right.svg";
import { Button } from "reactstrap";

const RegistrationRedirect = (props) => {
  const [counter, setCounter] = useState("10");

  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : redirect(props.location.deepDive);
  }, [counter, props.location.deepDive]);

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
          You're being transferred to our events list in {counter} seconds. When
          you're finished, you may close the tab and come back to Verse by Verse
          Fellowship's site. Please click the cancel button below if you would
          like to stay here.
        </p>
      </div>
      <div className="redirect-buttons">
        <Button
          size="lg"
          color="secondary"
          onClick={() => window.history.back()}
        >
          Stay Here
        </Button>{" "}
        <Button
          size="lg"
          color="success"
          onClick={() => redirect(props.location.deepDive)}
        >
          Proceed
        </Button>
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
