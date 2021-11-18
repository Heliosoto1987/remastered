//vendor
import React from "react";
//components
import { Button } from "../../components/buttons/Button";
//library
import Typing from "react-typing-animation";
//styles
import "./loginStyles/loginscreen.css";

export const LoginScreen = ({ history }) => {
  const handLeClick = () => {
    history.push("/about");
  };
  return (
    <>
      <div className="loginscreen">
        <div className="loginscreen__main">
          <h2 className="aboutscreen__main__firstTitle">
            const name = "Helio Javier Soto Arevalo"
          </h2>
          <div className="loginscreen__main--box">
            <Typing className={"login__libray"}>
              <span className="login__main--title">const welcome = "Bienvenido a  el portafolios de $"name" </span>
              <span className="login__main--title">
                Descubre mis habilidades
              </span>
            </Typing>
          </div>
          <Button text={"onClick={() => history.push('/Entrar')}"} handle={handLeClick}></Button>
        </div>
      </div>
    </>
  );
};
