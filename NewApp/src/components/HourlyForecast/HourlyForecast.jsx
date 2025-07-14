import "./HourlyForecast.scss";

const HourlyForecast = () => {
  return (
    <div className="hourlyForecast">
      <h3 className="title">Hoje</h3>
      <div className="hourlyList">
        <div className="hourlyItem">
          <span className="time">Agora</span>
          <div className="weatherIcon">
            {/* Here's an icon of the weather at that time */}
          </div>
          <span className="temp">27º</span>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
