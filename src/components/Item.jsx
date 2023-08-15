import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

import { useGlobalContext } from "../context";

const Item = ({ id, task, completed }) => {
  const { items, removeItem } = useGlobalContext();

  //   const [isChecked, setIsChecked] = useState(completed);

  return (
    <li className="task-wrapper">
      <div className="flexrow">
        <input
          type="checkbox"
          //   checked={isChecked}
          id="done"
          //   onChange={() => setIsChecked(!isChecked)}
        />
        <p className="task">{task}</p>
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
