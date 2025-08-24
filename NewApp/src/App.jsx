// Styles
import "./App.scss";

// Components
import CitySearchBar from "./components/SearchBar/CitySearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Header from "./components/Header/Header";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useState } from "react";
import useCurrentWeatherData from "./hooks/useFetch";
import ModalError from "./components/ModalError/ModalError";
import { OrbitProgress } from "react-loading-indicators";

function App() {
  const [city, setCity] = useState("");
  const { data, loading, error } = useCurrentWeatherData(city);

  return (
    <div className="app">
      <Header />
      <CitySearchBar onCitySubmit={setCity} />

      {error && <ModalError city={city} />}

      {loading && (
        <div className="loading">
          <OrbitProgress color="#ffffffff" size="medium" />
        </div>
      )}

      {data && (
        <div>
          <WeatherCard weather={data} />
          {/*<HourlyForecast weather={data} />
          <DailyForecast weather={data} />*/}
        </div>
      )}
    </div>
  );
}

export default App;
