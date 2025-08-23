// Styles
import "./App.scss";

// Components
import CitySearchBar from "./components/SearchBar/CitySearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Header from "./components/Header/Header";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useState } from "react";
import usedata from "./hooks/useFetch";
import ModalError from "./components/ModalError/ModalError";

function App() {
  const [city, setCity] = useState("");
  const { data, loading, error } = usedata(city);

  return (
    <div>
      <Header />
      <CitySearchBar onCitySubmit={setCity} />

      {error && (
        <ModalError
          city={city}
        />
      )}

      {data && (
        <div>
          <WeatherCard weather={data} />
          <HourlyForecast weather={data} />
          <DailyForecast weather={data} />
        </div>
      )}
    </div>
  );
}

export default App;
