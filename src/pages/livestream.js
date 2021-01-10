import React, { useEffect, useState } from "react";
import { getVideos } from "../util/index";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import Stream from "../components/stream";
import { sanity } from "../util/index";
import "../css/livestream.scss";

require("dotenv").config();

var sortBy = require("lodash.sortby");

export default function Livestream() {
  const [series, setSeries] = useState({});
  const midWeekQuery = `*[_type == "series" && title == "2 Samuel"]{
  title,
  description
}`;

  useEffect(() => {
    sanity.fetch(midWeekQuery).then((series) => setSeries(series[0]));
  }, [midWeekQuery]);

  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetching sunday service archive videos
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  const day = () => {
    let today = new Date();
    if (
      today.getDay() === 3 && //wednesday
      today.getHours() >= 18 && //between 6pm
      today.getHours() <= 23 // and 9pm
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        //check env var for value
        return process.env.REACT_APP_STREAM;
      } else {
        return "wednesday";
      }
    } else if (
      today.getDay() === 0 && //sunday
      today.getHours() >= 10 && //between 10am
      today.getHours() <= 13 // and 1pm
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        //check env var for value
        return process.env.REACT_APP_STREAM;
      } else {
        return "sunday";
      }
    } else {
      if (process.env.REACT_APP_STREAM !== "none") {
        //if the environment variable has been set to anything else
        //check env var for value
        return process.env.REACT_APP_STREAM;
      }
      return null;
    }
  };

  const noStreamMessage = (
    <p>
      Verse by Verse Fellowship livestreams its Wednesday and Sunday services.
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
          {day() === "wednesday" ? ( //if it's wednesday return wednesday stream
            <Stream
              streamUrl="https://vimeo.com/event/49116/embed"
              title={series.title}
              description={series.description}
              seriesLink={`/bible-studies/${series.title}`}
            />
          ) : day() === "sunday" ? ( //return sunday stream
            <>
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title="The Book of Philippians"
                description="Joy in the midst of suffering is the paradoxical experience of every Christian. Our sinful world induces suffering at every turn, it seems, yet Christians remain resolute in their hope for good things to come. This is the central message of Paul's letter to Philippi. "
                seriesLink={{
                  pathname: "/sermon-redirect",
                  deepDive: "bible-studies/philippians",
                }}
              />
            </>
          ) : day() === "christmas" ? ( // environment variable is christmas
            // return Christmas service
            <>
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title="Christmas Eve Service"
                description="Right before the birth of Jesus, Joseph and his family traveled 90 miles from their home in Nazareth to Bethlehem. Their Son was born in a manger in a field full of shepherds and sheep. Jesus’ birth in Bethlehem fulfilled Old Testament prophecies, but why did God want His Son to be born in such an out-of-the-way place? We'll find the answer in passages from Luke and Micah."
              />
            </>
          ) : day() === "guestTeacher" ? ( //returning component with no description for guest teacher
            <>
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title=""
                description=""
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
