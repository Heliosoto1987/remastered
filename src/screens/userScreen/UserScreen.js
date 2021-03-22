//vendor
import React from "react";
//styles
import "./userStyles/userscreen.css";
//components
import { Button } from "../../components/buttons/Button";

export const UserScreen = () => {
  return (
    <div className="userScreen">
      <h1>Permisos</h1>
      <div className="userContainer__box">
        <div className="userContainer__box--title">
          <h4 className="userContainer__box--insideTitle">Nombre:</h4>
          <span> Donato </span>
          <h5 className="userContainer__box--insideTitle">Tipo de usuario:</h5>
          <span>Premium:</span>
          <i className="fas fa-check-circle"></i>
        </div>

        <div className="userContainer__box--credit">
          <h5 className="userContainer__box--insideTitle">
            Credito Disponible:
          </h5>
          <span>1350 tokens</span>
          <h5 className="userContainer__box--insideTitle">Acceso a juego:</h5>
          <a target="_blank" href="https://heliosoto1987.github.io/first-game/">
            <Button text={"Entrar"} />
          </a>
        </div>
      </div>
    </div>
  );
};
