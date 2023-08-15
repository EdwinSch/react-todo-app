import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext();

// Local Storage Functions
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

export const AppProvider = ({ children }) => {
  // Global Stats
  const [items, setItems] = useState(getLocalStorage());
  const [newItemName, setNewItemName] = useState("");

  // Global Functions
  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      task: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    console.log("item removed");
    setLocalStorage(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const resetAllItems = () => {
    setItems(getLocalStorage());
  };

  const filterActiveItems = () => {
    const resetItems = getLocalStorage();
    const newItems = resetItems.filter((item) => {
      return item.completed === false;
    });
    setItems(newItems);
  };

  const filterCompletedItems = () => {
    const resetItems = getLocalStorage();
    const newItems = resetItems.filter((item) => {
      return item.completed === true;
    });
    setItems(newItems);
  };

  const clearList = () => {
    const newItems = [];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        addItem,
        newItemName,
        setNewItemName,
        removeItem,
        editItem,
        resetAllItems,
        filterActiveItems,
        filterCompletedItems,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
