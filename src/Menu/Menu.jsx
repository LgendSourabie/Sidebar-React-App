import React from "react";
import MenuHeader from "../MenuHeader/MenuHeader";
import Link from "../Link/Link";
import SocialLink from "../SocialLink/SocialLink";
import "./Menu.css";

function Menu() {
  return (
    <section>
      <div>
        <MenuHeader />
        <Link />
      </div>
      <SocialLink />
    </section>
  );
}

export default Menu;
