import { useState } from "react";
import "./App.scss";
import Temperature from "./components/Temperature";
import MoreInformations from "./components/MoreInformations";
import { CiSearch } from "react-icons/ci";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const [city, setCity] = useState("");
  const {nameCity, weatherData, loading, error, fetchWeatherData} = useWeatherData();

  const handleSearch = async () => {
    fetchWeatherData(city);
  };

  return (
    <div className="container">
      <Temperature nameCity={nameCity} weatherData={weatherData} loading={loading} error={error}/>
      <MoreInformations />
      <div className="search">
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={handleSearch}>
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default App;
