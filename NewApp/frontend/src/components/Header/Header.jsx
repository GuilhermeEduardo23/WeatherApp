import "./Header.scss";

// React Icons
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const Header = ({ darkMode, onToggleTheme }) => {
  return (
    <header className="header">
      <h1 className="title">
        Meu Tempo
        <img
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/partly-cloudy-day.png"
          alt="partly-cloudy-day"
        />
      </h1>
      <button className="theme-toggle" onClick={onToggleTheme}>
        <IoSunnyOutline
          className={`icon ${darkMode ? "visible" : "hidden"}`}
        />
        <IoMoon
          className={`icon ${darkMode ? "hidden" : "visible"}`}
        />
      </button>
    </header>
  );
};

export default Header;
