import { VscChromeClose } from "react-icons/vsc";

const Item = ({ id, task, completed }) => {
  return (
    <li className="task-wrapper">
      <p className="task">{task}</p>
      <button className="close-btn">
        <VscChromeClose />
      </button>
    </li>
  );
};

export default Item;
