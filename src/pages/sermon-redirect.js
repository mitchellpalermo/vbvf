import React, { useEffect, useState } from "react";
import "../css/sermon-redirect.scss";
import VbvfLogo from "../images/logos/vbvf_logo_full.png";
import VbvmiLogo from "../images/logos/vbvmi_logo.png";
import Arrow from "../images/arrow-thick-right.svg";
import { Button } from "reactstrap";

const SermonRedirect = (props) => {
  const [counter, setCounter] = useState("10");

  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : verseByVerseRedirect(props.location.deepDive);
  }, [counter, props.location.deepDive]);

  function verseByVerseRedirect(path) {
    window.location.replace(`https://www.versebyverseministry.org/${path}`);
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
      {/* <div className="redirect-countdown">
        <h2>{counter}</h2>
      </div> */}
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
          onClick={() => verseByVerseRedirect(props.location.deepDive)}
        >
          Proceed
        </Button>
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
