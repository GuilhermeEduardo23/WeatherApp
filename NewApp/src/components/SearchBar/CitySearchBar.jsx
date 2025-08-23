// Style
import "./CitySearchBar.scss";

// Hooks
import { useState } from "react";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = ({ onCitySubmit }) => {
  const [search, setSearch] = useState("");

  const handleCity = () => {
    if (onCitySubmit && search) {
      onCitySubmit(search);
      setSearch("");
    }
  };

  return (
    <div className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="Buscar cidade..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchButton">
        <IoIosSearch className="searchIcon" onClick={handleCity} />
      </button>
    </div>
  );
};

export default CitySearchBar;
