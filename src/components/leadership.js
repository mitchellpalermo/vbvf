import React from "react";
import "../css/leadership.scss";

import Stephen from "../images/leadership_photos/Stephen_Armstrong.jpeg";
import Tom from "../images/leadership_photos/Tom_Didier.jpeg";
import Jerry from "../images/leadership_photos/Jerry_Smith.jpeg";
import Bob from "../images/leadership_photos/Bob_Butler.jpeg";
import Jim from "../images/leadership_photos/Jim_Rowland.jpeg";
import John from "../images/leadership_photos/John_Oneill.jpeg";
import Jan from "../images/leadership_photos/Jan_Worrell.jpeg";
import Linda from "../images/leadership_photos/Linda_Briley.jpeg";
import Mike from "../images/leadership_photos/Mike_Morris.jpeg";
import Charlie from "../images/leadership_photos/Charlie_Haley.jpeg";
import Sofi from "../images/leadership_photos/Sofi_Smith.jpeg";
import Kathy from "../images/leadership_photos/Kathy_Smith.jpeg";
import Mitch from "../images/leadership_photos/Mitch_Palermo.jpeg";
import Wesley from "../images/leadership_photos/Wesley_Livingston.jpeg";
import Kyle from "../images/leadership_photos/Kyle_Mounts.jpeg";

import PhotoTitle from "../components/photo-title";

import AboutMenu from "./about-menu";

export default function Leadership() {
  return (
    <div className="leadership">
      <AboutMenu />
      <h1>Leadership</h1>
      <br />

      <h2>Elders</h2>

      <div className="leadership-photo-array">
        <PhotoTitle
          isLazy="eager"
          photo={Stephen}
          name={"Stephen Armstrong"}
          title={"Senior Pastor"}
        />

        <PhotoTitle
          isLazy="eager"
          photo={Tom}
          name={"Tom Didier"}
          title={"Discipleship"}
        />
        <PhotoTitle
          isLazy="eager"
          photo={Bob}
          name={"Bob Butler"}
          title={"Security"}
        />
        <PhotoTitle
          isLazy="eager"
          photo={Jim}
          name={"Jim Rowland"}
          title={"Chief Operations Officer"}
        />
        <PhotoTitle
          isLazy="eager"
          photo={John}
          name={"John O'Neill"}
          title={"Finance"}
        />
        <PhotoTitle
          isLazy="eager"
          photo={Jerry}
          name={"Jerry Smith"}
          title={"Facilities"}
        />
      </div>

      <h2>Pastors</h2>
      <div className="leadership-photo-array">
        <PhotoTitle
          isLazy="lazy"
          photo={Wesley}
          name={"Wesley Livingston"}
          title={"Youth Pastor"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Charlie}
          name={"Charlie Haley"}
          title={"Worship Pastor"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Mike}
          name={"Mike Morris"}
          title={"Associate Pastor"}
        />
      </div>

      <h2>Ministry Directors</h2>

      <div className="leadership-photo-array">
        <PhotoTitle
          isLazy="lazy"
          photo={Sofi}
          name={"Sofi Smith"}
          title={"Childrens' Ministry Director"}
        />

        <PhotoTitle
          isLazy="lazy"
          photo={Jan}
          name={"Jan Worrell"}
          title={"Women's Ministry Director"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Linda}
          name={"Linda Briley"}
          title={"Finances"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Kathy}
          name={"Kathy Smith"}
          title={"Administration Director"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Kyle}
          name={"Kyle Mounts"}
          title={"Audio/Visual Coordinator"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Mitch}
          name={"Mitch Palermo"}
          title={"Web Developer"}
        />
      </div>
    </div>
  );
}
