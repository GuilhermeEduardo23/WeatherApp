"use client";
import { useEffect, useState } from "react";
//import styles from "./search.module.scss";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

export default function Search() {
    const [city, setCity] = useState<string>('');

    useEffect(() => {
        async function getCity() {
            if(city) {
                const api: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=faf304ef7610279db0789696dbc57421`;
        
                await axios.get(api).then((response) => console.log(response.data));
            }
        }
        getCity();
    }, [city]);
    
    async function handleCity(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleCity(e)}>
            <label>
                <input 
                    type="text" 
                    id="city" 
                    placeholder="Pesquise a cidade" 
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                />
                <CiSearch />
            </label>
            <button type="submit">Pesquisar</button>
        </form>
    )
}