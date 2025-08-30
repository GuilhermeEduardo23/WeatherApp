import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;
    setError(false);
    setData(null);
    setLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL, { params: { city } }) // Envia o parâmetro city para o server.js
      .then((response) => setData(response.data))
      .catch((error) => setError(`Erro ao buscar dados do servidor: ${error}`))
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
};

export default useFetch;
