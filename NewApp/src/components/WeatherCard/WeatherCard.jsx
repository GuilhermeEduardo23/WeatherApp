import "./WeatherCard.scss";

import { IoSunnyOutline } from "react-icons/io5";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weatherCard">
      <div className="header">
        <div className="location">
          <h2 className="city">{weather.name}</h2>
          <p className="date">{`${new Date().toLocaleDateString("pt", {
            weekday: "long",
          })}, ${new Date().toLocaleDateString("pt")}`}</p>
        </div>
        <div className="temperature">
          <p className="currentTemperature">
            {Math.round(weather.main.temp)} ºC
          </p>
          <p className="feelsLike">
            Sensação: {Math.round(weather.main.feels_like)} ºC
          </p>
        </div>
      </div>
      <div className="details">
        <div className="condition">
          <p className="description">{weather.weather[0].description}</p>
        </div>
        <div className="weatherIcon">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
