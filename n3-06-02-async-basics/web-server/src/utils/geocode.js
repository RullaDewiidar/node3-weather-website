const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=4f9d72092d69913c7cba6dd3fa5fde89&units=metric`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (!body.coord) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.coord.lat,
        longitude: body.coord.lon,
      });
    }
  });
};

module.exports = geocode;
