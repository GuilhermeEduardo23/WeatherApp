// Style
import "./CitySearchBar.scss";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = () => {
  return (
    <div>
      <h1 className="title">Previsão do Tempo</h1>

      <div className="searchBar">
        <input type="text" placeholder="Buscar cidade..." />
        <IoIosSearch />
      </div>
    </div>
  );
};

export default CitySearchBar;
