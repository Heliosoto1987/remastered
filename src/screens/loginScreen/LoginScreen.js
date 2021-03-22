//vendor
import React from "react";
//components
import { Button } from "../../components/buttons/Button";
//lbirerys
import { ParticlesConfig } from "./ParticlesConfig";
import Typing from "react-typing-animation";
//styles
import "./loginStyles/loginscreen.css";

export const LoginScreen = ({ history }) => {
  const handLeClick = () => {
    history.push("/about");
  };
  return (
    <>
      <ParticlesConfig />
      <div className="aboutscreen">
        <div className="aboutscreen__main">
          <h2 className="aboutscreen__main__firstTitle">
            Portafolio de Helio Soto
          </h2>
          <div className="loginscreen__main--box">
            <Typing className={"about__libray"}>
              <span className="about__main--title">Bienvenido</span>
              <span className="about__main--title">
                Descubre mis habilidades
              </span>
            </Typing>
          </div>
          <Button text={"Entrar"} handle={handLeClick}></Button>
        </div>
      </div>
    </>
  );
};
