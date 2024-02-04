import React from "react";
import SingleLink from "../SingleLink/SingleLink";
import { links } from "../data";
import "./Link.css";
const Link = () => {
  return (
    <ul className="link-container">
      {links.map((link) => {
        return (
          <li key={link.id} className="link">
            <SingleLink {...link} />
          </li>
        );
      })}
    </ul>
  );
};

export default Link;
