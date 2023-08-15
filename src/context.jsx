import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Global Stats
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  // Global Functions
  const addItem = (itemName) => {
    const newItem = {
      task: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        addItem,
        newItemName,
        setNewItemName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
