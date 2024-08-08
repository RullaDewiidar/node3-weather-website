const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views locations
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory
app.use(express.static(publicDirectoryPath));

// --- Website itself ---
app.get("", (req, res) => {
  res.render("index", {
    title: "HomePage",
    name: "Rulla",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    helpText: "This is some helpful text",
    name: "Rulla",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Rulla",
  });
});

//app.com/weather

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an Address ",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term ",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("page404", {
    title: "404 Page",
    name: "rulla",
    errorMessage: "Help Article not found ",
  });
});

app.get("*", (req, res) => {
  res.render("page404", {
    title: "404 Page",
    name: "rulla",
    errorMessage: "Page Not Found ",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
