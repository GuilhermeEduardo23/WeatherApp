import "./HourlyForecast.scss";

const HourlyForecast = () => {
  return (
    <div>
      <h3 className="title">Hoje</h3>
      <div className="hourlyList">
        <div className="hourlyItem">
          <span className="time">Agora</span>
          <div className="weatherIcon">
            <svg></svg>
          </div>
          <span className="temp">27º</span>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
