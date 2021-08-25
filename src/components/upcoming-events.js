import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UpcomingEvents(props) {
  const [events, setEvents] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      auth: {
        username: process.env.REACT_APP_PLANNING_CENTER_APPID,
        password: process.env.REACT_APP_PLANNING_CENTER_SECRET,
      },
    };

    axios
      .get(
        `https://api.planningcenteronline.com/registrations/v2/events?filter=published`,
        options
      )
      .then((response) => {
        console.log(response);
        setEvents(response.data);
      });
  });

  return (
    <div>
      {events?.map((event) => (
        <div onClick={() => window.open(`${event.public_url}`)}>
          <img src={event.logo_url} alt="" />
          <h3>{event.name}</h3>
        </div>
      ))}
    </div>
  );
}
