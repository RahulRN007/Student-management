import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export const AppProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState(null); // Store login details

  // Function to update login info
  const updateLoginInfo = (username) => {
    setLoginInfo({
      username: username,
      time: new Date().toLocaleString(), // Store login time
    });
  };

  return (
    <AppContext.Provider value={{ loginInfo, updateLoginInfo }}>
      {children}
    </AppContext.Provider>
  );
};