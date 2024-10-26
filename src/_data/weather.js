import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
// Api key en locatie worden in een keer in de link aagesproken.
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/enkhuizen?unitGroup=metric&key=GKVDDNDB62J9SLLU64PB2FENM&contentType=json`;
  return EleventyFetch(url, {
    duration: "0s", //dit betekend dat de data elke keer wordt ingeladen, als heir 1h staat wordt dit elk uur ververst.
    type: "json", //dit geeft aan in wat voor taal het is geschreven.
    verbose: true
  })
};
