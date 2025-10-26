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
    <form className="search-form" onSubmit={handleCity}>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar cidade..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="submit">
        <IoIosSearch className="search-icon" onClick={handleCity} />
      </button>
    </form>
  );
};

export default CitySearchBar;
