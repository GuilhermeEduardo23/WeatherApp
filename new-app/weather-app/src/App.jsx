import "./App.scss";
import icon from "../public/icons8-chuva-100.png";
import { CiSearch } from "react-icons/ci";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  return (
    <main>
      <header>
        <div className="input_container">
          <input
            type="text"
            placeholder="Buscar cidade..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <CiSearch className="search_icon" onClick={useFetch(city)} />
        </div>
      </header>

      <div className="weather">
        <section className="main_information">
          <h1>Nome da cidade</h1>
          <img src={icon} alt="Ícone do tempo" />
          <h2>25ºC</h2>
        </section>

        <section className="more_informations">
          <article className="details">
            <span>Today</span>
            <span>Max: 25ºC / Min: 15ºC</span>
          </article>
          <article className="details">
            <span>Today</span>
            <span>Max: 25ºC / Min: 15ºC</span>
          </article>
          <article className="details">
            <span>Today</span>
            <span>Max: 25ºC / Min: 15ºC</span>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
