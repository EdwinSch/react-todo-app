import { VscChromeClose } from "react-icons/vsc";

import { useGlobalContext } from "../context";

const Item = ({ id, task, completed }) => {
  const { removeItem, editItem } = useGlobalContext();

  return (
    <li className="task-wrapper">
      <div className="flexrow">
        <label className="container">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => editItem(id)}
          />
          <span className="checkmark"></span>
        </label>
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
