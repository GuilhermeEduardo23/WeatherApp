// Styles
import "./App.scss";

// Components
import CitySearchBar from "./components/SearchBar/CitySearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Header from "./components/Header/Header";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import ModalError from "./components/ModalError/ModalError";
import { OrbitProgress } from "react-loading-indicators";

function App() {
  const [city, setCity] = useState("");
  const { data, loading, error } = useFetch(city);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((d) => !d);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  return (
    <div className={`app`}>
      <Header darkMode={darkMode} onToggleTheme={toggleTheme} />

      <CitySearchBar onCitySubmit={setCity} />

      {error && <ModalError city={city} />}

      {loading && (
        <div className="loading">
          {darkMode ? (
            <OrbitProgress color="#ffffffff" size="medium" />
          ) : (
            <OrbitProgress color="#000000" size="medium" />
          )}
        </div>
      )}

      {data && (
        <>
          <WeatherCard weather={data} />
          <DailyForecast weather={data} darkMode={darkMode}/>
        </>
      )}

      <footer className="footer">
        <span className="footer-text">
          Data provided by
          <a href="https://openweathermap.org/" target="_blank">
            <img
              className="openweather-logo"
              src="https://vectorseek.com/wp-content/uploads/2023/10/OpenWeather-Logo-Vector.svg-.png"
              alt="Logo OpenWeather"
            />
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
