import React from "react";
import { Button } from "reactstrap";
import Attendee from "../images/connect/attending_meeting.jpg";
import SteveTalking from "../images/connect/steve_talking.jpg";
import "../css/connect-page.scss";

const ConnectPage = () => {
  return (
    <div className="connect-container">
      <div>Connect Header</div>
      <div className="first-row">
        <p>
          Our monthly Connection Meeting offers prospective VBVF members the
          opportunity to hear more about our church distinctives, our history,
          vision, beliefs and style of ministry. Meet Pastor Steve and the other
          VBVF pastors, ask questions and get to know us. The meeting takes
          place on the first weekend of the month at 4:00 PM at the church, just
          prior to our regular Saturday evening service.
        </p>
        <img src={Attendee} alt="vbvf member in connection meeting" />
      </div>
      <div className="second-row">
        <img src={SteveTalking} alt="pastor steve talking with vbvf members" />
        <div className="word-section">
          <h2>Ready to learn more?</h2>
          <ol>
            <li>
              Submit a Connection Card during a VBVF worship service or submit
              your information online using the link below.
              <Button
                outline
                primary
                white
                href="https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
              >
                Connection Card
              </Button>
            </li>
            <li>
              Attend a Connection Meeting. Sign up using the link below.{" "}
              <Button
                outline
                primary
                white
                target="blank"
                href="https://vbvf.churchcenter.com/registrations/events/342417"
              >
                Connection Meeting
              </Button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
