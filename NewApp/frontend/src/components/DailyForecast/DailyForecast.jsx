import "./DailyForecast.scss";

const DailyForecast = ({ weather }) => {
  let dailyForecast = {};

  for (let forecast of weather.fiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString(); // Formata para exibição de data americana

    if (!forecast[date]) dailyForecast[date] = forecast; // Verifica se uma data já não foi adicionada no objeto dailyForecast, se não foi, adiciona, se já foi, ignora.
  }

  const fiveDayForecast = Object.values(dailyForecast).slice(1, 6); // Transforma o objeto dailyForecast em array de objetos com os principais dados

  const convertDate = (date) => {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  };

  return (
    <div className="dailyForecast">
      <h3 className="title">Próximos Dias</h3>
      {fiveDayForecast.map((forecast) => (
        <div key={forecast.dt}>
          <div className="daysList">
            <div className="dayCard">
              <span className="dayName">{convertDate(forecast)}</span>

              <img
                src={`https://openweathermap.org/img/wn/${
                  forecast.weather[0].icon === "01n"
                    ? "01d"
                    : forecast.weather[0].icon
                }.png`}
                alt={forecast.weather[0].description}
              />

              <div className="temperatures">
                <span className="minTemp">
                  Min: {Math.round(forecast.main.temp_min)}ºC
                </span>{" "}
                /
                <span className="maxTemp">
                  Max: {Math.round(forecast.main.temp_max)}ºC
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
