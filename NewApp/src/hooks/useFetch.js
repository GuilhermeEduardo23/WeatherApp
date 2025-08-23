import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentWeatherData = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const myKeyApi = "faf304ef7610279db0789696dbc57421";

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError("");
    setData(null);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKeyApi}&lang=pt&units=metric`
        );
        setData(response.data);
      } catch {
        setError(`Não foi possível encontrar a cidade informada.`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [city]);

  return { data, loading, error };
};

export default useCurrentWeatherData;
