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
import PhotoTitle from "../components/photo-title";

export default function Leadership() {
  return (
    <div>
      <h1>Leadership</h1>
      <br />
      <hr />
      <h2>Elders</h2>
      <hr />
      <div className="photo-array">
        <PhotoTitle
          photo={Stephen}
          name={"Stephen Armstrong"}
          title={"Senior Pastor"}
        />
        <PhotoTitle
          photo={Brian}
          name={"Brian Smith"}
          title={"Finance & Budget"}
        />
        <PhotoTitle photo={Tom} name={"Tom Didier"} title={"Discipleship"} />
        <PhotoTitle photo={Jerry} name={"Jerry Dyke"} title={"Missions"} />
      </div>
      <hr />
      <h2>Ministry Directors</h2>
      <hr />
      <div className="photo-array">
        <PhotoTitle
          photo={Taylor}
          name={"Taylor Putman"}
          title={"Youth Ministry Director"}
        />
        <PhotoTitle
          photo={Charlie}
          name={"Charlie Haley"}
          title={"Worship Pastor"}
        />
        <PhotoTitle
          photo={Sofi}
          name={"Sofi Smith"}
          title={"Childrens' Ministry Director"}
        />
        <PhotoTitle
          photo={Kathy}
          name={"Kathy Smith"}
          title={"Administration Director"}
        />
        <PhotoTitle
          photo={Mitch}
          name={"Mitch Palermo"}
          title={"Small Group Ministry Director"}
        />
        <PhotoTitle
          photo={Kat}
          name={"Kat Palermo"}
          title={"Small Group Ministry Director"}
        />
        <PhotoTitle
          photo={Terry}
          name={"Terry Bashore"}
          title={"Congregational Care Pastor"}
        />
        <PhotoTitle
          photo={Kyle}
          name={"Kyle Mounts"}
          title={"Audio/Visual Coordinator"}
        />
      </div>
    </div>
  );
}
