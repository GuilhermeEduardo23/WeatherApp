import "./DailyForecast.scss";

const DailyForecast = () => {
  return (
    <div className="dailyForecast">
      <h3 className="title">Próximos Dias</h3>
      <div className="daysList">
        <div className="dayCard">
          <span className="dayName">Terça</span>
          <div className="dayIcon">
            <svg></svg>
          </div>
          <div className="temperatures">
            <span className="minTemp">19º</span>
            <span className="maxTemp">25º</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
