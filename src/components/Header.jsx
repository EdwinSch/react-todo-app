import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useGlobalContext } from "../context";

const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <header>
      <h1>todo</h1>
      <button
        className="colormode-btn"
        onClick={toggleTheme}
        type="button"
        aria-label="toggle color theme"
      >
        {theme === "light-theme" ? <RiMoonFill /> : <RiSunFill />}
      </button>
    </header>
  );
};

export default Header;
