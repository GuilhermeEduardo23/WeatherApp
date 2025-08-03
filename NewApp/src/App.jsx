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

function App() {
  const [city, setCity] = useState("");
  const { currentWeatherData, loading, error } = useCurrentWeatherData(city);

  return (
    <div className="container">
      <Header />
      <CitySearchBar onCitySubmit={setCity} />
      {currentWeatherData && (
        <div>
          <WeatherCard weather={currentWeatherData} />
          <HourlyForecast weather={currentWeatherData} />
          <DailyForecast weather={currentWeatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
