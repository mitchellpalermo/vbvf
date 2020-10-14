import axios from "axios";
import imageUrlBuilder from "@sanity/image-url";
require("dotenv").config();

const SanityClient = require("@sanity/client");

export const sanity = new SanityClient({
  projectId: "bhphg9ym",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function sanityUrlFor(source) {
  return builder.image(source);
}

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
export function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

export async function getVideos(vimeoFolder) {
  const options = {
    url: `https://api.vimeo.com/me/projects/${vimeoFolder}/videos?direction=desc`,
    headers: {
      Authorization: process.env.REACT_APP_VIMEO_KEY,
    },
  };
  return axios(options);
}

export async function getSmallGroups() {}
