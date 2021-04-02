import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import { format } from "date-fns";
import { Spinner } from "reactstrap";
import "../css/whats-happening.scss";
import UpcomingEvents from "../components/upcoming-events";

export default function WhatsHappening() {
  const [announcement, setAnnouncement] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const query = `*[_type == "biWeeklyAnnouncements" ] | order(_createdAt desc) [0] `;
  useEffect(() => {
    sanity.fetch(query).then((response) => {
      console.log(response);
      setAnnouncement(response);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="announcements">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h5>{format(new Date(announcement._createdAt), "PPP")}</h5>
          <h1>VBVF Announcements</h1>
          <div className="announcements-video">
            <iframe
              allowFullScreen
              title={announcement._id}
              src={`https://player.vimeo.com/video/${announcement.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
            ></iframe>
          </div>
          <UpcomingEvents />
          <div className="announcements-text">
            <PortableText blocks={announcement?.text} />
          </div>
        </>
      )}
    </div>
  );
}
