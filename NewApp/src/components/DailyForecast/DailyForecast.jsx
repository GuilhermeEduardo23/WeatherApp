import "./DailyForecast.scss";

const DailyForecast = ({ weather }) => {
  let dailyForecast = {};

  for (let forecast of weather.fiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString(); // Formata para exibição de data americana

    if (!forecast[date]) dailyForecast[date] = forecast; // Verifica se uma data já não foi adicionada no objeto dailyForecast, se não foi, adiciona, se já foi, ignora.
  }

  const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 6);
  console.log(nextFiveDaysForecast);

  const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  return (
    <div className="dailyForecast">
      <h3 className="title">Próximos Dias</h3>
      {nextFiveDaysForecast.map((forecast) => (
        <div key={forecast.dt}>
          <div className="daysList">
            <div className="dayCard">
              <span className="dayName">
                {}
              </span>
              <div className="dayIcon">
                <svg></svg>
              </div>
              <div className="temperatures">
                <span className="minTemp">{Math.round(forecast.main.temp_min)} ºC</span>
                <span className="maxTemp">{Math.round(forecast.main.temp_max)} ºC</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
