// Styles
import "./App.scss";

// Components
import CitySearchBar from "./components/SearchBar/CitySearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Header from "./components/Header/Header";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/DailyForecast/DailyForecast";

function App() {
  return (
    <div className="container">
      <Header />
      <CitySearchBar />
      <WeatherCard />
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App;