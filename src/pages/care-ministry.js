import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import "../css/care-ministry.scss";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import ScriptureVerse from "../components/scripture-verse";

export default function CareMinistry() {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const query = `*[_type == "page" && title == "Care Ministries"]{...}`;
  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setIsLoading(!isLoading);
    });
    //eslint-disable-next-line
  }, [query]);
  return (
    <div className="care-ministries">
      <h1>Care Ministry</h1>
      <iframe
        title="Care Ministries"
        src="https://player.vimeo.com/video/508963469?color=ffffff&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="care-ministries-row vision">
        <p>
          Care Ministry offers supportive care to those in need, resting firmly
          on Galatians 6:2. There are three different programs and all provide
          the opportunity for spiritual growth and a deeper walk with God. If
          you are interested in participating in any of these, please contact us
          at <a href="mailto:supportcare@vbvf.org">supportcare@vbvf.org</a> or
          call the church at (210)460-7556 and leave a message for the Care
          Ministry.
        </p>
        <ScriptureVerse
          verse="Bear one another's burdens, and thereby fulfill the law of Christ"
          reference="Galatians 6:2"
        />
      </div>
      <div className="care-ministries-row">
        <span>
          <h3>Help for the Hurting</h3>
          <p>1-5 sessions</p>
        </span>
        <p>
          If you are struggling with life or a particular issue and want to work
          through it along side a Scripturally-grounded, caring Christian, Help
          for the Hurting is for you. You will be paired with a spiritually
          mature, compassionate Christian typically for up to 5 sessions, either
          virtually or in person, to resolve the issue consistent with Scripture
          and the leading of the Holy Spirit.{" "}
        </p>
      </div>
      <div className="care-ministries-row">
        <span>
          <h3>Biblical Counseling</h3>
          <p>Up to 10 sessions</p>
        </span>
        <p>
          {" "}
          Those in need of a longer-term, more in-depth experience may
          transition to Biblical Counseling Services where they will meet with a
          certified Biblical counselor for up to 10 sessions. Our counselors
          build relationship, observe, ask questions, speak truth in love and
          encourage going deeper in relationship with God and knowledge of
          Scripture, knowing that “all Scripture is given by inspiration of God,
          and is profitable for doctrine, for reproof, for correction, for
          instruction in righteousness.” (2 Timothy 3:16)
        </p>
      </div>
      <div className="care-ministries-row">
        <span>
          <h3>Care and Recovery Groups</h3>
          <p>Typically 13 Weeks</p>
        </span>
        <p>
          {" "}
          Much personal and spiritual growth may be accomplished through
          participation in structured Care and Recovery groups such as
          GriefShare, Celebrate Recovery, Boundaries, and Changes that Heal.
          Groups are offered for a specific timeframe, typically meeting once a
          week for up to two hours, and include a video seminar, small group
          discussion, and individual study using a workbook. There is a nominal
          charge for materials.
        </p>
      </div>
      <h3>FAQ</h3>
      <FrequentlyAskedQuestions layout="vertical" faq={pageData?.faq.faqs} />
    </div>
  );
}
