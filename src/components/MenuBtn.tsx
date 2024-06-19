import React from "react";
import menuIcon from "../assets/menu-alt.svg";

const MenuBtn: React.FC = () => {
  return (
    <figure className="lg:hidden mobile-menu-btn h-fit">
      <img src={menuIcon} alt="menu-alt-icon" />
    </figure>
  );
};

export default MenuBtn;
