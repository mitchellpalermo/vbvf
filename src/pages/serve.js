import React from "react";
import "../css/serve.scss";
import Ben from "../images/serve/ben_coffee.jpg";
import Cathy from "../images/serve/cathy_greeting.jpg";
import KidsMinistry from "../images/serve/kids_ministry.jpg";
import Levi from "../images/serve/levi_setup.jpg";
import John from "../images/serve/john_praying.jpg";

import ScriptureVerse from "../components/scripture-verse";
import { Button } from "reactstrap";

export default function Serve() {
  return (
    <div className="serve-container">
      <div className="serve-photo-collage">
        <div id="top-row">
          <img id="kids" src={KidsMinistry} alt="serving at the coffee bar" />
          <img id="ben" src={Ben} alt="serving at the coffee bar" />
        </div>
        <div id="bottom-row">
          <div id="title-block">
            <h1>Serve Together</h1>
            <img id="levi" src={Levi} alt="serving at the coffee bar" />
          </div>
          <img id="cathy" src={Cathy} alt="serving at the coffee bar" />
        </div>
      </div>
      <div className="serve-photo-collage-mobile">
        <h1>Serve Together</h1>
      </div>

      <div className="first-row">
        <p>
          We believe that our church exists to glorify God through teaching the
          word and equipping believers with truth that can be relied upon. Part
          of glorifying God is serving the body of Christ.{" "}
        </p>
        <ScriptureVerse
          verse='"Whatever you do, work heartily, as for the Lord and not for men,
            knowing that from the Lord you will receive the inheritance as your
            reward. You are serving the Lord Christ"'
          reference="Colossians 3:23-24"
        />
      </div>

      <div className="second-row">
        <div className="button-section">
          <p>
            Our church has many different areas to get involved with, all
            equally important. Serving with one another also provides an
            opportunity to form relationships with others. Click the button
            below to get started.
          </p>
          <div className="button-wrapper">
            <Button
              large
              outline
              white
              href="https://vbvf.churchcenter.com/people/forms/33404?open-in-church-center-modal=true"
            >
              Get Involved
            </Button>
          </div>
        </div>
        <img src={John} alt="volunteer praying with children" />
      </div>
    </div>
  );
}
