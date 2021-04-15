import React from "react";
import Attendee from "../images/connect/attending_meeting.jpg";
import ConnectionStep from "../components/connection-steps";
import "../css/connect-page.scss";

const ConnectPage = () => {
  return (
    <div className="connect-container">
      <div id="connect-header"></div>
      <h1>Connect Here.</h1>
      <div className="first-row">
        <div className="connection-meeting">
          <h2>Connection Meeting</h2>
          <p>
            We love seeing so many new faces at VBVF and would love to meet you!
            Come to one of the Connection Meetings immediately after each
            worship service on Sunday. We will meet you at the front of the
            church, the opposite side of the baptistry for a quick informational
            gathering to learn more about VBVF. One of our pastors will give a
            quick overview of all the great things happening at VBVF and answer
            any questions you might have.
          </p>

          <ConnectionStep
            copy=" We would love to contact you. Please submit a connection card using
            the button below."
            link="https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
            buttonText="Connection Card"
          />
        </div>
        <img src={Attendee} alt="vbvf member in connection meeting" />
      </div>
    </div>
  );
};

export default ConnectPage;
