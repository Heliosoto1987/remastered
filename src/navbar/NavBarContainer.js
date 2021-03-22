//vendor
import React from "react";
//router
import { Link } from "react-router-dom";
//
import "./navbarstyles/navbarcontainer.css";

export const NavBarContainer = () => {
  return (
    <div className="container__left">
      <Link className="container__left--item" to="/about">
        Sobre Mí <i className="fas fa-home"></i>
      </Link>

      <Link className="container__left--item" to="/resume">
        Curriculum<i className="fas fa-file"></i>
      </Link>

      <Link className="container__left--item" to="/projects">
        Proyectos <i className="fas fa-search"></i>
      </Link>

      <Link className="container__left--item" to="/contact">
        Contacto <i className="fas fa-id-card"></i>
      </Link>
    </div>
  );
};
