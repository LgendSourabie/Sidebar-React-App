import React from "react";
import { GrClose } from "react-icons/gr";
import "./MenuHeader.css";
import { useGlobalContext } from "../GlobalContext/Context";

const MenuHeader = () => {
  const { close, setClose } = useGlobalContext();

  return (
    <div className="menu-header">
      <img src="logo.svg" alt="Logo" />
      <GrClose className="icon-clr" onClick={() => setClose(!close)} />
    </div>
  );
};

export default MenuHeader;
