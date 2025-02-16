"use client";
import { useState } from "react";
import styles from "./search.module.scss";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import IWeather from "@/app/Types/IWeather";

export default function Search({getCity}: {getCity: (city: string) => void}) {
  const [data, setData] = useState<IWeather>();
  const[city, setCity] = useState<string>("");

  async function handleCity() {
    console.log(city);
    const api: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=faf304ef7610279db0789696dbc57421&units=metric`;

    await axios.get(api).then((response) => {
      setData(response.data.main);
      getCity(response.data.name);
    });
  }

  return (
    <div className={styles.container}>
      <h1>{data && !isNaN(data.temp) ? `${Math.round(data.temp)}ºC` : ""}</h1>

      <div className={styles.search}>
        <input
          className={styles.search_input}
          type="text"
          placeholder="Pesquise a cidade"
          onChange={(e) => (
            setCity(e.target.value)
          )}
          value={city}
        />

        {city && (
          <button
            className={styles.search_button}
            onClick={handleCity}
            title="Search"
          >
            <CiSearch />
          </button>
        )}
      </div>
    </div>
  );
}