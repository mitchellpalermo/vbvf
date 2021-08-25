import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import { format } from "date-fns";
import { Spinner } from "reactstrap";
import "../css/whats-happening.scss";

import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import UpcomingEvents from "../components/upcoming-events";

export default function WhatsHappening() {
  const [announcement, setAnnouncement] = useState();
  const [noAnnouncement, setNoAnnouncement] = useState(false);
  const [isAnnouncementLoading, setIsAnnouncementLoading] = useState(true);
  const [pageData, setPageData] = useState();
  const [isFaqLoading, setIsFaqLoading] = useState(true);
  // const [series, setSeries] = useState();
  // const [isSeriesLoading, setIsSeriesLoading] = useState(true);

  const announcementQuery = `*[_type == "biWeeklyAnnouncements" ] | order(_createdAt desc) [0] `;
  const query = `*[_type == "page" && title == "About Page"]{...}`;
  // const seriesQuery = `*[_type == "series" && endDate > $now] {title, meetingTime, seriesImage}`;
  useEffect(() => {
    sanity
      .fetch(announcementQuery)
      .then((response) => {
        if (response === null) {
          setNoAnnouncement(true);
          setIsAnnouncementLoading(false);
        } else {
          setAnnouncement(response);
          setIsAnnouncementLoading(false);
        }
      })
      .catch(() => {
        setNoAnnouncement(true);
      });

    sanity.fetch(query).then((response) => {
      setPageData(response[0]);
      setIsFaqLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   sanity.fetch(seriesQuery).then((response) => {
  //     setSeries(response);
  //     setIsSeriesLoading(false);
  //   });
  //   //eslint-disable-next-line
  // }, []);

  // const matchingTitle = (dayOfWeek) => {
  //   const matchingSeries = series.filter(
  //     (series) => series.meetingTime.day === dayOfWeek
  //   );
  //   console.log(matchingSeries[0]?.title);
  //   return matchingSeries.length > 0 ? matchingSeries[0].title : "";
  // };

  return (
    <div className="announcements">
      {noAnnouncement ? (
        <>
          <p>Looks like there's no announcements.</p>
          <p>
            Please try again later. In the meantime, check out our FAQs below.
          </p>
        </>
      ) : isAnnouncementLoading ? (
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
          <div className="announcements-text">
            <PortableText blocks={announcement?.text} />
          </div>
        </>
      )}
      <UpcomingEvents />
      <div className="announcements-service-times">
        <h2>Service times</h2>
        <div className="announcements-service-times-info">
          <div>
            <h3>Tuesday</h3>
            <p>
              Women's Bible Study <br /> 10:00am - Sanctuary <br />
              {/* <Link
                    to={`bible-studies/${matchingTitle("Tuesday")}
                    `}
                  >
                    The book of Esther
                  </Link> */}
            </p>
          </div>
          <div>
            <h3>Wednesday</h3>
            <p>
              Mid-week Bible Study <br /> 7:00pm - Sanctuary <br />
              {/* <Link
                    to={`bible-studies/${matchingTitle("Wednesday")}
                    `}
                  >
                    How to study your bible
                  </Link> */}
            </p>
          </div>
          <div>
            <h3>Sunday</h3>
            <p>
              Worship Service <br />
              9:00am & 11:00am - Sanctuary <br />
              {/* <Link
                    to={`bible-studies/${matchingTitle("Sunday")}
                    `}
                  >
                    The book of Philippians
                  </Link> */}
            </p>
          </div>
        </div>
      </div>
      {isFaqLoading ? (
        <Spinner />
      ) : (
        <div className="announcements-faq">
          <h2>General FAQs</h2>
          <FrequentlyAskedQuestions
            faq={pageData.faq.faqs.slice(0, 4)}
            layout="compact"
          />
        </div>
      )}
    </div>
  );
}
