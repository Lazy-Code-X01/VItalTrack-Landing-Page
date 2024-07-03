import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
//   const [showContact, setShowContact] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    // showContact,
    // setShowContact,
  };

  return <UIContext.Provider value={value}> {children} </UIContext.Provider>;
};
