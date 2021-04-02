import React, { useState, useEffect } from "react";
import "../css/leadership.scss";

import Jan from "../images/leadership_photos/Jan_Worrell.jpeg";
import Linda from "../images/leadership_photos/Linda_Briley.jpeg";
import Mike from "../images/leadership_photos/Mike_Morris.jpeg";
import Charlie from "../images/leadership_photos/Charlie_Haley.jpeg";
import Sofi from "../images/leadership_photos/Sofi_Smith.jpeg";
import Kathy from "../images/leadership_photos/Kathy_Smith.jpeg";
import Mitch from "../images/leadership_photos/Mitch_Palermo.jpeg";
import Wesley from "../images/leadership_photos/Wesley_Livingston.jpeg";
import Kyle from "../images/leadership_photos/Kyle_Mounts.jpeg";
import Matthew from "../images/leadership_photos/Matthew_McWaters.jpeg";

import { sanity, sanityUrlFor } from "../util/index";
import PhotoTitle from "../components/photo-title";

import AboutMenu from "./about-menu";

export default function Leadership() {
  const elderQuery = `*[_type == "person" && role == "Elder"]`;

  const [elders, setElders] = useState();
  useEffect(() => {
    sanity.fetch(elderQuery).then((response) => {
      setElders(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="leadership">
      <AboutMenu />
      <h1>Leadership</h1>
      <br />

      <h2>Elders</h2>
      <div className="leadership-photo-array">
        {elders?.map((elder) => (
          <PhotoTitle
            photo={sanityUrlFor(elder?.image).width(300)}
            title={elder?.department}
            role={elder?.role}
            name={elder?.name}
          />
        ))}
      </div>

      <h2>Pastors</h2>
      <div className="leadership-photo-array">
        <PhotoTitle
          isLazy="lazy"
          photo={Wesley}
          name={"Wesley Livingston"}
          email="pastorwesley@vbvf.org"
          title={"Associate Pastor"}
          role={"Online and Youth Ministry"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Charlie}
          name={"Charlie Haley"}
          email="pastorcharlie@vbvf.org"
          title={"Associate Pastor"}
          role={"Worship"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Mike}
          name={"Mike Morris"}
          email="pastormike@vbvf.org"
          title={"Associate Pastor"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Matthew}
          name={"Matthew McWaters"}
          email="pastormatthew@vbvf.org"
          title={"Associate Pastor"}
          role={"Small Groups"}
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
          title={"Production Director"}
        />
        <PhotoTitle
          isLazy="lazy"
          photo={Mitch}
          name={"Mitchell Palermo"}
          title={"Web Developer"}
        />
      </div>
    </div>
  );
}
