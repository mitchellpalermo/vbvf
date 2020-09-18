import React from "react";
import "../css/online-ministry.scss";
import Zoom from "../images/online_ministry.jpg";

export default function OnlineMinistry() {
  return (
    <div className="online-ministry">
      <h1>VBVF Online Ministry</h1>

      <div className="online-ministry-header">
        <div className="mission-container">
          <h2>What is online ministry?</h2>
          <p>
            VBVF Online ministry is inteded to extend the local church's ability
            to provide spaces for believers to respond to God's word. Through
            virtual groups, believers can dig deeper and encourage one another.
            If you're looking to engage with other believers while you study
            God's word, consider joining a virtual small group
          </p>
        </div>
      </div>
      <div className="link-block-container">
        <div className="link-block" id="join">
          <h3>I want to join!</h3>
        </div>
        <div className="link-block" id="more-questions">
          <h3>I have more questions</h3>
        </div>
      </div>
    </div>
  );
}
