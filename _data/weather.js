const fetch = require('node-fetch');

module.exports = async function () {
  // Replace with your Visual Crossing API key and the desired location
  const apiKey = "GKVDDNDB62J9SLLU64PB2FENM";
  const location = "New York"; // You can change this to any location
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/enkhuizen?unitGroup=metric&key=GKVDDNDB62J9SLLU64PB2FENM&contentType=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the weather data to be used in templates
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {}; // Return an empty object if there's an error
  }
};
