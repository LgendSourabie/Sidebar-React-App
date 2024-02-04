import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Home.css";
import Modal from "../Modal/Modal";
import { useGlobalContext } from "../GlobalContext/Context";
const Home = ({ handleClick }) => {
  const { open, setOpen } = useGlobalContext();
  return (
    <div className="main-container">
      {!open ? (
        <>
          <GiHamburgerMenu className="icon-hamburger" onClick={handleClick} />
          <button className="btn" onClick={() => setOpen(!open)}>
            show modal
          </button>
        </>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default Home;
