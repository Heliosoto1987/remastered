//vendor
import React from "react";
//NavBar
import { NavBarContainer } from "./NavBarContainer";
// styles
import "./navbarstyles/navBar.css";

export const NavBar = ({ isOpen, initialMount, setMenuIsVisible }) => {
  if (initialMount) {
    return null;
  }
  return (
    <div
      onClick={() => setMenuIsVisible((prevState) => !prevState)}
      className={`menu__container ${
        isOpen ? "menu__container--open" : "menu__container--close"
      }`}
    >
      <NavBarContainer />
    </div>
  );
};
