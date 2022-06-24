import axios from "axios";
import imageUrlBuilder from "@sanity/image-url";

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

export function isMobileDevice() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
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

export function isOver(date) {
  const end = new Date();
  const dateArr = date.split("-");
  end.setFullYear(dateArr[0]);
  end.setMonth(dateArr[1] - 1); //months start at 0 hence decrementing by 1
  end.setDate(dateArr[2]);

  return end.getTime() < Date.now(); // will return false if end is in the future (aka study is not over)
}

export function sanityFormatTodaysDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function livestreamHappeningNow() {
  // Get time zone offset for NY, USA
  const getCstOffset = () => {
    const stdTimezoneOffset = () => {
      var jan = new Date(0, 1);
      var jul = new Date(6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };

    var today = new Date();

    const isDstObserved = (today: Date) => {
      return today.getTimezoneOffset() < stdTimezoneOffset();
    };

    if (isDstObserved(today)) {
      return -5;
    } else {
      return -6;
    }
  };

  const d = new Date();
  // convert to msec since Jan 1 1970
  const localTime = d.getTime();
  // obtain local UTC offset and convert to msec
  const localOffset = d.getTimezoneOffset() * 60 * 1000;
  // obtain UTC time in msec
  const utcTime = localTime + localOffset;
  // obtain and add destination's UTC time offset
  const cstOffset = getCstOffset();
  const usa = utcTime + 60 * 60 * 1000 * cstOffset;

  // convert msec value to date string
  const nd = new Date(usa);

  if (process.env.REACT_APP_STREAM !== "none") {
    return process.env.REACT_APP_STREAM;
  } else {
    if (
      nd.getDay() === 3 && //wednesday
      nd.getHours() >= 18 && //between 6pm
      nd.getHours() <= 21 // and 9pm
    ) {
      return "wednesday";
    } else if (
      nd.getDay() === 0 && //sunday
      nd.getHours() >= 10 && //between 10am
      nd.getHours() <= 13 // and 1pm
    ) {
      return "sunday";
    }
  }
  return null;
}

export function nthWeekdayOfMonth(weekday, n, testDate = new Date()) {
  // Usage check
  if (typeof weekday !== "number" || typeof n !== "number") {
    throw new Error(
      "Function nthWeekdayOfMonth Usage Error: nthWeekdayOfMonth(<weeekday 0-6>, <n>, [testDate])"
    );
  }
  weekday = Math.floor(weekday % 7);
  n = Math.floor(n);

  // Calculate the first instance of the given weekday in the given month
  let monthBegin = new Date(testDate.getFullYear(), testDate.getMonth(), 1);
  let monthBeginWeekday = monthBegin.getDay();

  // Calculate how many days from beginning of month until the first instance of the given weekday
  let daysUntilFirstWeekday = (weekday - monthBeginWeekday + 7) % 7;

  // Start with this date then add 7 days for each week
  let nthWeekdayDate = 1 + daysUntilFirstWeekday + 7 * (n - 1);

  // Return final Date
  return new Date(testDate.getFullYear(), testDate.getMonth(), nthWeekdayDate);
}

export function nthSundayHasCome(n, testDate = new Date()) {
  // Usage check
  if (typeof n !== "number") {
    throw new Error(
      "Function nthSundayHasCome Usage Error: nthSundayHasCome(<n>, [testDate])"
    );
  }

  return testDate.getTime() >= nthWeekdayOfMonth(0, n, testDate).getTime();
}

export function getOrdinalNum(number) {
  let selector;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ["th", "st", "nd", "rd", ""][selector];
}
