import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [numOrder, setNumOrder] = useState([]);
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider
      value={{ username, setUsername, numOrder, setNumOrder, data, setData }}
    >
      {children}
    </AppContext.Provider>
  );
};
