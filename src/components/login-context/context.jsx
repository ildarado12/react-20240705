import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [loginStatus, setUser] = useState("Login");

  const toggleUser = useCallback(() => {
    setUser((cur) => (cur === "Login" ? "Exit" : "Login"));
  }, []);

  return (
    <UserContext.Provider value={{ value: loginStatus, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};
