require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://new-app-my-weather.vercel.app/",
  credentials: true
}));

app.get("/", (req, res) => {
  res.send({message: "Servidor funcionando!"});
})

app.get("/api/dados", async (req, res) => {
  // req: recebe o valor da variável de fora que envia, res: envia a resposta
  const { city } = req.query; // recebe o parâmetro da querystring

  if (!city) return res.status(400).json({ error: "Cidade não informada!" });

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
    res.status(500).json({ error: `Erro interno do servidor: ${error}` });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
