import React, { useEffect, useState } from "react";
import "../css/sermon-redirect.scss";
import VbvfLogo from "../images/logos/vbvf_logo_full.png";
import VbvmiLogo from "../images/logos/vbvmi_logo.png";
import Arrow from "../images/arrow-thick-right.svg";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const SermonRedirect = (props) => {
  const [counter, setCounter] = useState("10");
  const navigate = useNavigate(-1);
  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : verseByVerseRedirect("https://www.versebyverseministry.org/");
  }, [counter]);

  function verseByVerseRedirect() {
    window.location.replace(`https://www.versebyverseministry.org/`);
  }

  return (
    <div className="redirect">
      <div className="redirect-desc">
        <h1>You are now leaving Verse by Verse Fellowship</h1>
        <p>
          You're being transferred to Verse by Verse Ministry's website. Please
          click the cancel button below if you would like to stay here.
        </p>
      </div>

      <div className="redirect-buttons">
        <Button
          size="large"
          color="red"
          buttonFunc={() => navigate(-1)}
          title="Stay Here"
        />
        <Button
          size="large"
          color="green"
          buttonFunc={() => verseByVerseRedirect()}
          title="Proceed"
        />
      </div>
      <div className="redirect-images">
        <img alt="" src={VbvfLogo} />
        <img id="arrow" alt="" src={Arrow} />
        <img alt="" src={VbvmiLogo} />
      </div>
    </div>
  );
};

export default SermonRedirect;
