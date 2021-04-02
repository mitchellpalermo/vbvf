import React, { useState, useEffect } from "react";
import { sanity, isOver } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import "../css/announcement.scss";

export default function Announcement() {
  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return <a href={href}>{children}</a>;
      },
    },
  };

  let { announcementId } = useParams();
  const params = { announcementId: announcementId };
  const query = `*[_type == "specialAnnouncement" && _id == $announcementId] {
        title,
        body,
        expirationDate,
        whereToDisplay,
        _createdAt,
        _id
    }`;
  const [specialAnnouncement, setSpecialAnnouncement] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query, params).then((results) => {
      setSpecialAnnouncement(results[0]);
      setIsLoading(!isLoading);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="announcement">
      {isLoading ? (
        <>
          Loading Announcement
          <Spinner />
        </>
      ) : (
        <>
          {!isOver(specialAnnouncement.expirationDate) ? (
            <div className="announcement-text">
              <h1>{specialAnnouncement.title}</h1>
              <h6>
                Date posted: {specialAnnouncement._createdAt.slice(0, 10)}
              </h6>
              <PortableText
                blocks={specialAnnouncement.body}
                serializers={serializers}
              />

              <h3>Questions?</h3>
              <p>
                Please <Link to="/contact">contact us.</Link>
              </p>
            </div>
          ) : (
            <div className="no-announcement">
              <h1>No special announcements at this time</h1>
              <h3>Feel free to </h3>
              <ul>
                <li>
                  <Link to="/bible-studies/">Listen Bible teaching</Link>
                </li>
                <li>
                  <Link to="about/faq">Read more about VBVF</Link>
                </li>
                <li>
                  <Link to="/livestream">View recent livestreams</Link>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
