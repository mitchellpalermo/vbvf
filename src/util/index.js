require("dotenv").config();

export function getVideos() {
  moment().calendar(null, {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "DD/MM/YYYY",
  });
  var endpoint =
    "https://api.vimeo.com/me/projects/1892341/videos?direction=desc";
  var init = {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_VIMEO_KEY,
      "Content-Type": "application/json",
    },
  };
  return fetch(endpoint, init).then((data) => {
    return data.json();
  });
}
