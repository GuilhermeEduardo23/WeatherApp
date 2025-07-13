import "./WeatherCard.scss";

import { IoSunnyOutline } from "react-icons/io5";

const WeatherCard = () => {
  return (
    <div className="weatherCard">
      <div className="header">
        <div className="location">
          <h2 className="city">São Paulo</h2>
          <p className="date">Domingo, 13 de julho de 2025.</p>
        </div>
        <div className="temperature">
          <p className="currentTemperature">27º</p>
          <p className="feelsLike">Sensação: 29º</p>
        </div>
      </div>
      <div className="details">
        <div className="condition">
          <p className="description">Ensolarado</p>
          <div className="stats">
            <div className="stat">
              <IoSunnyOutline className="statIcon" />
              <span>10%</span>
            </div>
          </div>
        </div>
        <div className="weatherIcon">
          <IoSunnyOutline />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
