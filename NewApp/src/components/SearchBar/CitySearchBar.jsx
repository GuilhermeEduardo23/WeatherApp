// Style
import "./CitySearchBar.scss";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = () => {
  return (
    <form className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="Buscar cidade..."
      />
      <button className="searchButton">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default CitySearchBar;
