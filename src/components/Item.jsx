import { VscChromeClose } from "react-icons/vsc";

import { useGlobalContext } from "../context";

const Item = ({ id, task, completed }) => {
  const { items, removeItem, editItem } = useGlobalContext();

  return (
    <li className="task-wrapper">
      <div className="flexrow">
        <input
          type="checkbox"
          checked={completed}
          id="done"
          onChange={() => editItem(id)}
        />
        <p className={completed ? "task strike" : "task"}>{task}</p>
      </div>

      <button
        className="close-btn"
        onClick={() => removeItem(id)}
        type="button"
      >
        <VscChromeClose />
      </button>
    </li>
  );
};

export default Item;
