const https = require("https");
const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&appid=8ef119ae7f2e23849dc5d1f8c9e2129d ";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.error("Error:", error);
});
request.end();
