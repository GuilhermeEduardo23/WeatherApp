const Temperature = ({ nameCity, descriptionWeather, weatherData }) => {
  return (
    <div className="temperature">
      <span>{nameCity}</span>
      <img src={descriptionWeather.icon} alt={descriptionWeather.main} />
      <p>{Math.floor(weatherData)}ºC</p>
      <p className="description">{descriptionWeather.description}</p>
    </div>
  );
};

export default Temperature;
