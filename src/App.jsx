import Header from "./components/Header";
import Input from "./components/Input";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <main>
      <figure className="wallpaper">{/* CSS Controlled */}</figure>
      <div className="center">
        <Header />
        <Input />
        <ItemsList />
      </div>
    </main>
  );
}

export default App;
