import React, { useState, useEffect } from "react";
import "../css/leadership.scss";
import { sanity, sanityUrlFor } from "../util/index";
import PhotoTitle from "../components/photo-title";

import AboutMenu from "./about-menu";

export default function Leadership() {
  const elderQuery = `*[_type == "person" && role == "Elder"] | order(name asc)`;
  const pastorQuery = `*[_type == "person" && role == "Associate Pastor"]`;
  const directorQuery = `*[_type == "person" && role == "Ministry Director" || role == "Staff" || role == "Volunteer Staff"] | order(name asc)`;

  const [elders, setElders] = useState();
  const [pastors, setPastors] = useState();
  const [directors, setDirectors] = useState();

  useEffect(() => {
    sanity.fetch(elderQuery).then((response) => {
      setElders(response);
    });
    sanity.fetch(pastorQuery).then((response) => {
      setPastors(response);
    });
    sanity.fetch(directorQuery).then((response) => {
      setDirectors(response);
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
        {pastors?.map((pastor) => (
          <PhotoTitle
            isLazy="lazy"
            photo={sanityUrlFor(pastor?.image).width(300)}
            title={pastor?.department}
            role={pastor?.role}
            name={pastor?.name}
            email={pastor?.email}
          />
        ))}
      </div>

      <h2>Ministry Directors & Staff</h2>

      <div className="leadership-photo-array">
        {directors?.map((director) => (
          <PhotoTitle
            isLazy="lazy"
            photo={sanityUrlFor(director?.image).width(300)}
            role={director?.role}
            title={director?.department}
            name={director?.name}
          />
        ))}
      </div>
    </div>
  );
}
