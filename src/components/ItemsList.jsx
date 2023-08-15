import Item from "./Item";
import Filters from "./Filters";

import { useGlobalContext } from "../context";

const testList = [
  {
    id: 1,
    task: "Everyday carry keffiyeh wolf vinyl",
    completed: false,
  },
  {
    id: 2,
    task: "Paleo thundercats pitchfork gochujang",
    completed: false,
  },
  {
    id: 3,
    task: "Lyft disrupt butcher glossier sustainable",
    completed: false,
  },
];

const ItemsList = () => {
  const { items } = useGlobalContext();

  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
      {/* User Options */}
      <div className="user-options-container">
        <p className="items-remain">3 items left</p>
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
