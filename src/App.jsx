import Header from "./components/Header";
import Input from "./components/Input";
import ItemsList from "./components/ItemsList";
import Filters from "./components/Filters";
import { useEffect } from "react";

import { useGlobalContext } from "./context";

function App() {
  const { theme } = useGlobalContext();

  // Load initial color theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <figure className="wallpaper">{/* CSS Controlled */}</figure>
      <div className="center">
        <Header />
        <Input />
        <ItemsList />
        <div className="show-on-mobile">
          <Filters />
        </div>
      </div>
    </main>
  );
}

export default App;
