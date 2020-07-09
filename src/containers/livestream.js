import React, { useEffect, useState } from "react";
import { getVideos } from "../util/index";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import Stream from "../components/stream";
import Content from "../content/study-content";
import "../css/livestream.scss";

require("dotenv").config();

var sortBy = require("lodash.sortby");

export default function Livestream() {
  const ephesians = Content.studies[0];

  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  const day = () => {
    let today = new Date();
    if (
      today.getDay() === 2 &&
      today.getHours() >= 18 &&
      today.getHours() <= 23
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        return process.env.REACT_APP_STREAM;
      } else {
        return "tuesday";
      }
    } else if (
      today.getDay() === 0 &&
      today.getHours() >= 10 &&
      today.getHours() <= 13
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        return process.env.REACT_APP_STREAM;
      } else {
        return "sunday";
      }
    } else {
      return null;
    }
  };

  const noStreamMessage = (
    <p>
      Verse by Verse Fellowship livestreams its Tuesday and Sunday services.
      While there's not a service streaming right now, please feel free to check
      out some of our recent services below. Recordings of our services are
      available on our <Link to="/bible-studies">Bible Studies</Link> page.
    </p>
  );

  const streamArchive = () => {
    const sortedVideos = sortBy(
      sundayArchiveVideos,
      "last_user_action_event_date"
    ).reverse();
    console.log(sortedVideos);
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
          {day() === "tuesday" ? ( //if it's tuesday return tuesday stream
            <Stream
              streamUrl="https://vimeo.com/event/49116/embed"
              title={ephesians.name}
              description={ephesians.description}
              dropBoxFolder={ephesians.dropBoxFolder}
              seriesLink="/bible-studies/ephesians"
            />
          ) : day() === "sunday" ? ( //return sunday stream
            <Stream
              streamUrl="https://vimeo.com/event/51649/embed"
              title="Gospel of Matthew"
              description="As we present this important book, we’ll give careful attention to
              the details without losing sight of Matthew’s major ideas and
              themes. Together with our previous studies in Luke and John, we’re
              rounding out the full story of Jesus’ arrival and work on earth.
              Every Christian can profit from such a grounding."
              seriesLink={{
                pathname: "/sermon-redirect",
                deepDive: "bible-studies/gospel-of-matthew",
              }}
            />
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
