import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

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
  }, []);

  return (
    <div className="announcements">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="announcement-first-row">
            <h1>
              {announcement?._createdAt.slice(0, 10)} <br />
              Announcements
            </h1>
            <div className="announcement-first-row-video">
              <iframe
                allowFullScreen
                title={announcement._id}
                src={`https://player.vimeo.com/video/${announcement.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
              ></iframe>
            </div>
          </div>
          <div className="announcement-events-text">
            <div>upcoming events</div>
            <div className="announcement-events-text-body">
              <PortableText blocks={announcement?.text} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
