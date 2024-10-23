import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
  // Replace with your Visual Crossing API key and the desired location
  // const apiKey = "GKVDDNDB62J9SLLU64PB2FENM";
  // const location = "Enkhuizen"; // You can change this to any location
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/enkhuizen?unitGroup=metric&key=GKVDDNDB62J9SLLU64PB2FENM&contentType=json`;
  return EleventyFetch(url, {
    duration: "0s",
    type: "json",
    verbose: true
  })
};
