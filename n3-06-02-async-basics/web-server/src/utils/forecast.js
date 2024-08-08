// const request = require("request");

// const forecast = (lat, lon, callback) => {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8ef119ae7f2e23849dc5d1f8c9e2129d`;

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("URL is not reachable", undefined);
//     } else if (body.clouds === -0) {
//       callback("Change location ", undefined);
//     } else {
//       callback(undefined, body.cod);
//     }
//   });
// };

// module.exports = forecast;

const request = require("request");
const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8ef119ae7f2e23849dc5d1f8c9e2129d`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("URL is not reachable", undefined);
    } else if (body.cod !== "200") {
      callback("Change location", undefined);
    } else {
      const list = body.list[0]; // Get the first item in the list
      const weatherMain = list.weather[0].main;
      const weatherDescription = list.weather[0].description;
      const temperature = list.main.temp;
      const feelsLike = list.main.feels_like;
      const humidity = list.main.humidity;
      const formattedForecast = `
      Weather: ${weatherMain}
      Description: ${weatherDescription}
      Temperature: ${temperature}°C
      Feels Like: ${feelsLike}°C
      Humidity: ${humidity}%
      `;
      callback(undefined, formattedForecast);
    }
  });
};

module.exports = forecast;
