import axios, { AxiosError } from "axios";
import { useState } from "react";

const useWeatherData = () => {
  const [nameCity, setNameCity] = useState("");
  const [descriptionWeather, setDescriptionWeather] = useState({});
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    if (!city) return;

    setLoading(true);

    const response = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=faf304ef7610279db0789696dbc57421`
      )
    ).data;

    try {
      setNameCity(response.name);

      setDescriptionWeather({
        main: response.weather[0].main,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
      });

      setWeatherData(response.main.temp);
      setLoading(false);
      setError(null);
    } catch (error) {
      if (axios.AxiosError(error))
        setError(error.response?.data?.message || "Erro ao buscar dados");
      else setError("Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return {
    nameCity,
    descriptionWeather,
    weatherData,
    error,
    loading,
    fetchWeatherData,
  };
};

export default useWeatherData;
