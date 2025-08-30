// Style
import "./CitySearchBar.scss";

// Hooks
import { useState } from "react";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = ({ onCitySubmit }) => {
  const [search, setSearch] = useState("");

  const handleCity = (event) => {
    event.preventDefault();

    if (onCitySubmit && search) {
      onCitySubmit(search);
      setSearch("");
    }
  };

  return (
    <form className="searchForm" onSubmit={handleCity}>
      <input
        className="searchInput"
        type="text"
        placeholder="Buscar cidade..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchButton" type="submit">
        <IoIosSearch className="searchIcon" onClick={handleCity} />
      </button>
    </form>
  );
};

export default CitySearchBar;
