import React from "react";
import "./SingleLink.css";
const SingleLink = ({ url, text, icon }) => {
  return (
    <>
      <span className="link-icon">{icon}</span>
      <a href={url}>{text}</a>
    </>
  );
};

export default SingleLink;
