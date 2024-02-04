import React from "react";
import Menu from "./Menu/Menu";
import Home from "./Home";
import { useGlobalContext } from "./GlobalContext/Context";

const App = () => {
  const { close, setClose } = useGlobalContext();

  const handleClick = () => {
    setClose(!close);
  };
  return (
    <>
      <Home handleClick={handleClick} />
      <div className={close === true ? "" : "showSideBar"}>
        <Menu />
      </div>
    </>
  );
};
export default App;
