import React, { useEffect, useState } from "react";
import { getVideos, isOver, livestreamHappeningNow } from "../util/index";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import Stream from "../components/stream";
import { sanity } from "../util/index";
import "../css/livestream.scss";
import MemorialService from "../components/memorial-service";

var sortBy = require("lodash.sortby");

export default function Livestream() {
  const [wednesdaySeries, setWednesdaySeries] = useState({});
  const [sundaySeries, setSundaySeries] = useState({});

  const wednesdayQuery = `*[_type == "series" && meetingTime.day == "Wednesday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url
}`;
  const sundayQuery = `*[_type == "series" && meetingTime.day == "Sunday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url
}`;

  useEffect(() => {
    sanity.fetch(wednesdayQuery).then((wednesdaySeries) => {
      setWednesdaySeries(
        wednesdaySeries.find((series) => !isOver(series.endDate))
      );
    });
  }, [wednesdayQuery]);
  useEffect(() => {
    sanity.fetch(sundayQuery).then((sundaySeries) => {
      setSundaySeries(sundaySeries.find((series) => !isOver(series.endDate)));
    });
  }, [sundayQuery]);

  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetching sunday service archive videos
    getVideos("11739413").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  const noStreamMessage = (
    <p>
      Verse by Verse Fellowship livestreams its Sunday services. While there's
      not a service streaming right now, please feel free to check out some of
      our recent services below. Recordings of our services are available on our{" "}
      <Link to="/bible-studies">Bible Studies</Link> page.
    </p>
  );

  const streamArchive = () => {
    const sortedVideos = sortBy(
      sundayArchiveVideos,
      "last_user_action_event_date"
    ).reverse();
    return sortedVideos.slice(0, 3).map((video) => (
      <>
        <h3>{video.name}</h3>
        <div
          className="livestream-archive-video-player"
          dangerouslySetInnerHTML={createMarkup(video)}
        ></div>
      </>
    ));
  };

  function createMarkup(video) {
    return { __html: video.embed.html };
  }

  return (
    <div className="livestream">
      <h1>Livestream</h1>
      {isLoading ? (
        <>
          <p>Loading Services</p>
          <Spinner color="dark" />
        </>
      ) : (
        <>
          {livestreamHappeningNow() === "wednesday" ? ( //if it's wednesday return the active series happening on wednesday
            <Stream
              streamUrl="https://vimeo.com/event/2282207/embed"
              title={wednesdaySeries.title}
              description={wednesdaySeries.description}
              seriesLink={`/bible-studies/${wednesdaySeries.title}`}
              notesUrl={wednesdaySeries.notesUrl}
              questionUrl={wednesdaySeries.questionUrl}
            />
          ) : livestreamHappeningNow() === "sunday" ? ( //return sunday stream
            <>
              <Stream
                streamUrl="https://vimeo.com/event/2282202/embed"
                title={sundaySeries.title}
                description={sundaySeries.description}
                seriesLink={`/bible-studies/${sundaySeries.title}`}
                notesUrl={sundaySeries.notesUrl}
                questionUrl={sundaySeries.questionUrl}
              />
            </>
          ) : livestreamHappeningNow() === "memorial" ? ( // environment variable is memorial
            // return memorial service
            <>
              <MemorialService />
            </>
          ) : livestreamHappeningNow() === "guestTeacher" ? ( //returning component with no description for guest teacher
            <>
              {/* TODO: UPDATE URLS */}
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title=""
                description=""
              />
            </>
          ) : livestreamHappeningNow() === "christmas" ? ( //returning component with no description for guest teacher
            <>
              {/* TODO: UPDATE URLS */}
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title="Christmas Eve Service"
                description="Luke 2:22-35"
              />
            </>
          ) : (
            //return livestream archive
            <div className="livestream-archive">
              <div>{noStreamMessage}</div>
              {streamArchive()}
            </div>
          )}
        </>
      )}
    </div>
  );
}
