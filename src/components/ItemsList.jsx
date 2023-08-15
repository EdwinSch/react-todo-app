import Item from "./Item";
import Filters from "./Filters";

import { useGlobalContext } from "../context";

const ItemsList = () => {
  const { items } = useGlobalContext();

  console.log(items);

  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
      {/* User Options */}
      <div className="user-options-container">
        <p className="items-remain">
          {items.length === 0 ? "List is empty" : `${items.length} items left`}
        </p>
        <div className="hide-on-mobile">
          <Filters />
        </div>
        <button className="text-btn clear-completed-btn" type="button">
          clear completed
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
