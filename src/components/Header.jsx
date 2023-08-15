import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <h1>todo</h1>
      <button className="colormode-btn">
        <RiMoonFill />
      </button>
    </header>
  );
};

export default Header;
