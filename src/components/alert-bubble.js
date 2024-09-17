import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import { Link, useLocation } from "react-router-dom";
import "../css/alert-bubble.scss";

export default function AlertBubble() {
  const [announcement, setAnnouncement] = useState();
  let page = useLocation();

  //the query beneath pulls in announcements that are not expired which also contain the current page in the whereToDisplay array
  const announcementQuery = `*[_type == "specialAnnouncement" && expirationDate > $now && $currentPage in whereToDisplay ] {
        title,
        body,
        expirationDate,
        alertBubbleText,
        whereToDisplay,
        _id
    }`;

  const params = { currentPage: page.pathname };

  useEffect(() => {
    sanity
      .fetch(announcementQuery, params)
      .then((result) => {
        setAnnouncement(result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={`alert-bubble ${announcement != null ? "active" : "hidden"}`} //conditionally showing announcement
    >
      {announcement?.alertBubbleText}{" "}
      <Link to={`${announcement?._id}`}>Read more</Link>
    </div>
  );
}
