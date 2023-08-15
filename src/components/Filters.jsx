import { useGlobalContext } from "../context";

const Filters = () => {
  const { filterActiveItems, resetAllItems, filterCompletedItems } =
    useGlobalContext();

  return (
    <section className="filter-btns-container">
      <button
        className="text-btn filter-btn"
        onClick={resetAllItems}
        type="button"
      >
        all
      </button>
      <button
        className="text-btn filter-btn"
        onClick={filterActiveItems}
        type="button"
      >
        active
      </button>
      <button
        className="text-btn filter-btn"
        onClick={filterCompletedItems}
        type="button"
      >
        completed
      </button>
    </section>
  );
};

export default Filters;
