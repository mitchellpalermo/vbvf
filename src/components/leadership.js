import React from "react";
import "../css/leadership.css";
import Stephen from "../images/stephen.jpg";
import Brian from "../images/brian.jpg";
import Tom from "../images/tom.jpg";
import Jerry from "../images/jerry.jpg";
import Taylor from "../images/taylor.jpg";
import Charlie from "../images/charlie.jpg";
import Sofi from "../images/sofi.jpg";
import Kathy from "../images/kathy.jpg";
import Mitch from "../images/mitch.jpg";
import Kat from "../images/kat.jpg";
import Terry from "../images/terry.jpg";
import Kyle from "../images/kyle.jpg";

export default function Leadership() {
  return (
    <div>
      <h1>Leadership</h1>
      <br />
      <h2>Elders</h2>
      //Todo: reprocess all photos with the same size
      <div className="photo-array">
        <div className="person">
          <img src={Stephen} />
          <p>
            Stephen Armstrong <span className="title">Senior Pastor</span>
          </p>
        </div>
        <div className="person">
          <img src={Brian} />
          <p>
            Brian Smith <span className="title">Financial Elder</span>
          </p>
        </div>
        <div className="person">
          <img src={Tom} />
        </div>
        <div className="person">
          <img src={Jerry} />
        </div>
      </div>
      <h2>Ministry Directors</h2>
      <div className="photo-array">
        <div className="person">
          <img src={Taylor} />
        </div>
        <div className="person">
          <img src={Charlie} />
        </div>
        <div className="person">
          <img src={Sofi} />
        </div>
        <div className="person">
          <img src={Kathy} />
        </div>
        <div className="person">
          <img src={Mitch} />
        </div>
        <div className="person">
          <img src={Kat} />
        </div>
        <div className="person">
          <img src={Terry} />
        </div>
        <div className="person">
          <img src={Kyle} />
        </div>
      </div>
    </div>
  );
}
