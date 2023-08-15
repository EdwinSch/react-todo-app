const Filters = () => {
  return (
    <section className="filter-btns-container">
      <button className="text-btn filter-btn" type="button">
        all
      </button>
      <button className="text-btn filter-btn" type="button">
        active
      </button>
      <button className="text-btn filter-btn" type="button">
        completed
      </button>
    </section>
  );
};

export default Filters;
