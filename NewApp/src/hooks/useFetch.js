import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentWeatherData = (city) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const myKeyApi = "faf304ef7610279db0789696dbc57421";
  console.log("Cidade dentro do useFetch: " + city);

  useEffect(() => {
    if (!city) return;
    console.log(city);
    setLoading(true);
    setError(null);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKeyApi}`
      )
      .then((response) => console.log(response))
      .catch(err => setError(err))
  }, [city]);

  return {useCurrentWeatherData, loading, error};
};

export default useCurrentWeatherData;