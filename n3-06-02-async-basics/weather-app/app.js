const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

console.log(process.argv);
geocode(address, (error, { lati, long }) => {
  if (error) {
    return console.log(error);
  }

  forecast(lati, long, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(long);
    console.log(forecastData);
  });
});

// const apiKey = "4f9d72092d69913c7cba6dd3fa5fde89";
// const city = "new york";

// // URL for the OpenWeatherMap API
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// request ({ url: url, json: true }, (error, response) => {
// if (error) {
//     console.log('Unable to connect to weather service!')
// } else if (response.body.error) {
//     console.log('Unable to find location!')
// } else {
//    console.log(response.body.wind.deg + 'The Description is' + response.body.timezone )

// }
// })
