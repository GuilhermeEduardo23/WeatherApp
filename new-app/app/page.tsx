"use client";
import Search from "./Components/Search/search";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  //useState para armazenar o nome da cidade, que será recebido do componente Search
  const [nameCity, setNameCity] = useState<string>("");
  	
  //Função que recebe o nome da cidade do componente Search, para atualizar o useState nameCity
  const getCity = (city: string) => {
    setNameCity(city);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <label>{nameCity}</label>
        <Search getCity={getCity}/>
      </div>
    </div>
  );
}