import axios from "axios";
import imageUrlBuilder from "@sanity/image-url";
require("dotenv").config();

const sanityClient = require("@sanity/client");

export const sanity = sanityClient({
  projectId: "bhphg9ym",
  dataset: "production",
  useCDN: true,
});

const builder = imageUrlBuilder(sanity);

export function sanityUrlFor(source) {
  return builder.image(source);
}

export function onIphone() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPad") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1
  ) {
    return true;
  } else {
    /* else use Google */
  }
}

export async function getVideos(vimeoFolder) {
  const options = {
    method: "GET",
    url: `https://api.vimeo.com/me/projects/${vimeoFolder}/videos?direction=desc`,
    headers: {
      Authorization: process.env.REACT_APP_VIMEO_KEY,
    },
  };
  return axios(options);
}
