import React from "react";
import "../css/mission-banner.scss";
import Grow from "../images/icons/Grow.svg";
import Equip from "../images/icons/Equip.svg";
import Live from "../images/icons/Live.svg";

export default function MissionBanner() {
  return (
    <div className="mission-container">
      <div className="mission-block">
        <img alt="" src={Grow}></img>
        <p>
          <strong>Growing</strong> in the grace and knowledge of our Lord Jesus
          Christ.
        </p>
      </div>
      <div className="mission-block">
        <img alt="" src={Equip}></img>
        <p>
          <strong>Equipping</strong> one another to reach the world for Jesus
          Christ.
        </p>
      </div>
      <div className="mission-block">
        <img alt="" src={Live}></img>
        <p>
          <strong>Living</strong> with eyes for eternity.
        </p>
      </div>
    </div>
  );
}
