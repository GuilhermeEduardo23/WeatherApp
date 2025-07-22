// Style
import "./CitySearchBar.scss";

// Hooks
import { useRef, useState } from "react";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = ({ onCitySubmit }) => {
  const inputRef = useRef();

  const handleCity = (event) => {
    event.preventDefault();

    if (onCitySubmit && inputRef.current.value)
      onCitySubmit(inputRef.current.value);
  };

  return (
    <form className="searchForm" onSubmit={handleCity}>
      <input
        className="searchInput"
        type="text"
        placeholder="Buscar cidade..."
        ref={inputRef}
      />
      <button type="submit" className="searchButton">
        <IoIosSearch className="searchIcon" />
      </button>
    </form>
  );
};

export default CitySearchBar;
