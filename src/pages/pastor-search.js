import React from "react";

import "../css/pastor-search.scss";

import Video from "../components/video";

export default function PastorSearch() {
  return (
    <div className="pastor-search">
      <div className="pastor-search-container">
        <div className="pastor-search-content">
          <h1>Pastoral Search Update</h1>
          <p>
            After much prayer and discussion, Pastor Tony Caffey has been called
            as the new Senior Pastor of Verse by Verse by Fellowship. The Search
            Committee and the Elders having been working for almost a year to
            find God’s person to serve. We believe God led us to Tony and we
            praise God for his faithfulness.
          </p>

          <p>
            Tony is married to Sanja, and they have one son Alastair. Tony has
            been the Senior Pastor at Harvest Church in Decatur Illinois for 14
            years. Tony grew up in Austin, Texas where his parents still live.
            He attended college in East Texas where he met his wife Sanja. They
            moved to Chicago for seminary. He has a Master of Divinity degree
            from Moody Bible Institute and a PhD in Old Testament studies from
            Trinity Evangelical Divinity School.
          </p>
          <Video videoId="660488765" />
          <div className="pastor-search-content-prayer">
            <h4>Tony has asked us to pray for three things.</h4>
            <ol>
              <li>Pray his current home will be sold quickly.</li>
              <li>Pray for Harvest Decatur and their transition.</li>
              <li>Pray for the future of VBVF.</li>
            </ol>
          </div>
          <p>
            We anticipate the Caffey family will be here by the end of February.
            Please pray God blesses this transition as we continue the
            dedication to God’s word that is embedded in our name, Verse by
            Verse Fellowship.
          </p>
        </div>
      </div>
    </div>
  );
}
