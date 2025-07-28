// Style
import "./CitySearchBar.scss";

// Hooks
import { useRef } from "react";

// Icon
import { IoIosSearch } from "react-icons/io";

const CitySearchBar = ({ onCitySubmit }) => {
  const inputRef = useRef();

  const handleCity = () => {
    if (onCitySubmit && inputRef.current.value)
      onCitySubmit(inputRef.current.value);
  };

  return (
    <div className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="Buscar cidade..."
        ref={inputRef}
      />
      <button className="searchButton">
        <IoIosSearch className="searchIcon" onClick={handleCity}/>
      </button>
    </div>
  );
};

export default CitySearchBar;
