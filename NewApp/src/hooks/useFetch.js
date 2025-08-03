import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentWeatherData = (city) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const myKeyApi = "faf304ef7610279db0789696dbc57421";

  useEffect(() => {
    if (!city) return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKeyApi}&lang=pt&units=metric`
      )
      .then((response) => setCurrentWeatherData(response.data))
      .catch(err => setError(err));

    setLoading(false);
  }, [city]);

  return { currentWeatherData, loading, error };
};

export default useCurrentWeatherData;
