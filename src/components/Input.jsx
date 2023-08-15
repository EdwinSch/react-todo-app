import { useGlobalContext } from "../context";

const Input = () => {
  const { addItem, newItemName, setNewItemName } = useGlobalContext();

  // Local Functions
  const handleChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newItemName) {
      console.log("field is empty");
      return;
    }
    addItem(newItemName);
    setNewItemName("");

    // console.log(newItemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItemName}
        onChange={handleChange}
        name="input"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default Input;
