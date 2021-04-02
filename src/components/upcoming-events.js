import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UpcomingEvents(props) {
  const [events, setEvents] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.churchcenter.com/registrations/v2/events?order=starts_at&filter=active,published&per_page=100`
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
