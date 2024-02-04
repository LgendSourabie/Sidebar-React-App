import React from "react";
import { IoClose } from "react-icons/io5";
import "./Modal.css";
import { useGlobalContext } from "../GlobalContext/Context";
const Modal = () => {
  const { open, setOpen } = useGlobalContext();

  return (
    <div className="container">
      <div className="modal-content">
        <p> Modal content</p>
        <IoClose className="top-right-close" onClick={() => setOpen(!open)} />
      </div>
    </div>
  );
};

export default Modal;
