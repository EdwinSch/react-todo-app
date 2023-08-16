import { useGlobalContext } from "../context";
import { useEffect, useRef, useState } from "react";

const Filters = () => {
  const { filterBtns, filterItems } = useGlobalContext();
  const [active, setActive] = useState(null);

  return (
    <section className="filter-btns-container">
      {filterBtns.map((button, index) => {
        const isActive = active === index;
        return (
          <button
            key={`button-${index}`}
            className={
              isActive
                ? "text-btn filter-btn active-filter"
                : "text-btn filter-btn"
            }
            onClick={() => filterItems(button, setActive, index)}
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
