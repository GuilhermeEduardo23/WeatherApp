import { useState } from "react";
import "./App.scss";
import NameCity from "./Components/NameCity";
import Temperature from "./Components/Temperature";
import MoreInformations from "./Components/MoreInformations";
import { CiSearch } from "react-icons/ci";

function App() {
  //const [city, setCity] = useState("");

  return (
    <div className="container">
      <NameCity />
      <Temperature />
      <MoreInformations />
      <div className="search">
        <input type="text" placeholder="Digite o nome da cidade..." />
        <button>
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default App;
