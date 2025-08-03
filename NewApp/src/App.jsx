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

function App() {
  const [city, setCity] = useState("");
  const { currentWeatherData, loading, error } = useCurrentWeatherData(city);
  
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);

  function handleCloseModalError() {
    setShowErrorModal(false);
  }

  return (
    <div>
      <Header />
      <CitySearchBar onCitySubmit={setCity} />

      {error && <ModalError city={city} onClose={handleCloseModalError} isOpen={showErrorModal}/>}

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
