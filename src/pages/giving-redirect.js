import React, { useEffect, useState } from "react";
import "../css/sermon-redirect.scss";
import VbvfLogo from "../images/logos/vbvf_logo_full.png";
import GivingLogo from "../images/logos/giving_logo.png";
import Arrow from "../images/arrow-thick-right.svg";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const GivingRedirect = (props) => {
  const [counter, setCounter] = useState("10");

  const navigate = useNavigate();
  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : givingRedirect("https://vbvf.churchcenter.com/giving");
  }, [counter]);

  function givingRedirect(path) {
    window.location.replace(`https://vbvf.churchcenter.com/giving`);
  }

  return (
    <div className="redirect">
      <div className="redirect-desc">
        <h1>You are now leaving Verse by Verse Fellowship</h1>
        <p>
          You're being transferred to our giving portal. When you're finished,
          you may hit the back button and come back to Verse by Verse
          Fellowship's site. Please click the cancel button below if you would
          like to stay here.
        </p>
      </div>
      <div className="redirect-buttons">
        <Button
          size="large"
          color="bone"
          buttonFunc={() => navigate(-1)}
          title="Stay"
        />{" "}
        <Button
          color="green"
          size="large"
          title="Proceed"
          buttonFunc={() =>
            givingRedirect("https://vbvf.churchcenter.com/giving")
          }
        />
      </div>
      <div className="redirect-images">
        <img alt="" src={VbvfLogo} />
        <img id="arrow" alt="" src={Arrow} />
        <img alt="" src={GivingLogo} />
      </div>
    </div>
  );
};

export default GivingRedirect;
