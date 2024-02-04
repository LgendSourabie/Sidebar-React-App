import React from "react";
import { social } from "../data";
import "./SocialLink.css";
const SocialLink = () => {
  return (
    <ul className="social-link-container">
      {social.map((item) => {
        return (
          <li key={item.id} className="social-link">
            <a href={item.url}>{item.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
