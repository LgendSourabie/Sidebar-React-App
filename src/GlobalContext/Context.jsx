import { useContext, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);

  return <GlobalContext.Provider value={{ close, setClose, open, setOpen }}>{children}</GlobalContext.Provider>;
};

export default AppContext;
