import React from "react";

import Sofi from "../../images/leadership_photos/Sofi_Smith.jpeg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import SofiJonBTS from "../..//images/childrens-ministry/sofi_jon_bts.jpg";
import "../../css/childrens/childrens-ministry.scss";
import ScriptureVerse from "../scripture-verse";
import Button from "../button";
import Content from "../../content/childrens-ministry-content";
import StaffInfo from "../staff-info";

export default function ChildrensMinistry() {
  const weeklyActivities = [
    {
      title: "Prayer Night",
      desc:
        "We all have needs and the church is called to carry the burdens and praises of life together. Join us every 2nd and 4th Sunday of every month at 6:30pm",
    },
    {
      title: "Devo Day",
      desc:
        "Weekly we join together via zoom for a short lesson, game and fellowship with children currently in  3rd, 4th and 5th grade. Join us every Thursday at 630PM via zoom, as we have fun while coming together in God’s Word.",
    },
    {
      title: "Story Time",
      desc:
        "We would love for your young children, grades PreK through 2nd, to join us for a vibrant and alive story time. The reading will take place via Zoom, Every 1st, 3rd & 5th Monday. We will enjoy a time or short worship, reading and other fun stuff!",
    },
    {
      title: "Packet Pickup",
      desc:
        "Come pick up a packet filled with crafts, activity pages and much more on the last Friday of each month. We will distribute packets at 1PM, in the VBVF Church parking lot.",
    },
  ];

  return (
    <div className="childrens-ministry">
      <div className="childrens-ministry-header">
        <img
          className="childrens-ministry-header-logo"
          alt="Journey Kids Logo"
          src={JourneyLogo}
        />
      </div>

      <div className="childrens-ministry-mission">
        <p>{Content.firstRow.body}</p>
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
      </div>

      <div className="childrens-ministry-materials">
        <div className="button-container">
          <h2>
            Biblically grounded
            <br /> childrens' material
          </h2>
          <p>New videos and activities every week</p>
          <Button
            size="medium"
            title="View resources"
            buttonFunc={() => {
              window.open("/childrens-content");
            }}
          />
        </div>
        <img alt="ministry leaders filming content" src={SofiJonBTS} />
      </div>
      <div className="childrens-ministry-sign-up">
        <h4>
          Join our email list to receive notifications about new children's
          learning materials, events and other announcements.
        </h4>
        <Button
          size="large"
          title="Sign me up"
          buttonFunc={() => {
            window.location.href =
              "https://vbvf.churchcenter.com/people/forms/118844?open-in-church-center-modal=true";
          }}
        />
      </div>
      <StaffInfo
        name={Content.leader.name}
        role={Content.leader.role}
        email={Content.leader.email}
        bio={Content.leader.bio}
        image={Sofi}
      />
    </div>
  );
}
