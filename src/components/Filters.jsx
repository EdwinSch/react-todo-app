import { useGlobalContext } from "../context";

const Filters = () => {
  const { filterBtns, filterItems } = useGlobalContext();

  return (
    <section className="filter-btns-container">
      {filterBtns.map((button, index) => {
        return (
          <button
            key={button}
            className="text-btn filter-btn"
            onClick={() => filterItems(button)}
            type="button"
          >
            {button}
          </button>
        );
      })}
    </section>
  );
};

export default Filters;
