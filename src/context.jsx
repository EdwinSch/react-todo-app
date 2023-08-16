import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext();

// ---- Local Storage Functions
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
  // ---- Global States
  const [items, setItems] = useState(getLocalStorage());
  const [newItemName, setNewItemName] = useState("");
  const [theme, setTheme] = useState("light-theme");

  // ---- Global Functions
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

  const filterItems = (input) => {
    if (input === "all") {
      setItems(getLocalStorage());
      return;
    }
    if (input === "active") {
      const reloadItems = getLocalStorage();
      const newItems = reloadItems.filter((item) => item.completed === false);
      setItems(newItems);
      return;
    }
    if (input === "completed") {
      const reloadItems = getLocalStorage();
      const newItems = reloadItems.filter((item) => item.completed === true);
      setItems(newItems);
      return;
    }
  };

  const clearList = () => {
    const newItems = [];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  // ---- Global Data
  const filterBtns = ["all", "active", "completed"];

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
        filterItems,
        clearList,
        theme,
        setTheme,
        toggleTheme,
        filterBtns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
