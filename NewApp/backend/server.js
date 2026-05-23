require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["https://new-app-my-weather.vercel.app", "http://localhost:5173"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Response to inform that the backend server is working
app.get("/", (req, res) => {
  res.send({ message: "Server running!" });
});

app.get("/api/dados", async (req, res) => {
  // req: receives the value of the variable sent from outside, res: sends the response
  const { city } = req.query; // receives the query string parameter

  if (!city) return res.status(400).json({ error: "City not specified!" });

  try {
    const responseCurrentWeatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: process.env.API_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );

    const responseFiveDaysWeatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appid: process.env.API_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );

    res.json({
      current: responseCurrentWeatherData.data,
      fiveDays: responseFiveDaysWeatherData.data,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
