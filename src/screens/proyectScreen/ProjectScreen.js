//vendor
import React from "react";
//library
import Typing from "react-typing-animation";
//components
import { Footer } from "../../components/footer/Footer";
//styles
import "./proyectStyles/proyectscreen.css";

export const ProjectScreen = ({ history }) => {
  return (
    <>
      <div className="projectScreen">
        <Typing className={"projectScreen__libray"}>
          <span className="projectScreen__title">
            Algunos de mis proyectos.
          </span>
        </Typing>
        <ul className="projectScreen__container">
          <li className="projectScreen__flex">
            <span className="projectScreen__text">
              Descripción: Realizado en React utilizando useReduce, "To do App"
              ya no vas a olvidar más tus cosas por hacer, anotalas y sin
              problemas cierra la aplicación que el localStorage lo recordara
              por ti.
            </span>
            <div
              onClick={() => {
                history.push("/todoapp");
              }}
              className="projectScreen__img animate__animated animate__backInDown"
            >
              <img
                className="projectScreen__img--item"
                src="/remastered/assets/todoApp.png"
              />
            </div>
          </li>
          <li className="projectScreen__flex">
            <span className="projectScreen__text">
              Descripción: Realizado en javascript Vanilla, Trata de adivinar El
              numero que invento "DONATO". Nota: Puedes hacer una trampa =)
            </span>
            <a
              target="_blank"
              href="https://heliosoto1987.github.io/first-game/"
              className="projectScreen__img aab animate__animated animate__backInDown"
            >
              <img
                className="projectScreen__img--item"
                src="/remastered/assets/guess.png"
              />
            </a>
          </li>
          <li className="projectScreen__flex">
            <span className="projectScreen__text">
              Descripción: Realizado en react consumiendo una api, Buscador de
              GIF.
            </span>
            <div
              onClick={() => {
                history.push("/giphy");
              }}
              className="projectScreen__img animate__animated animate__backInDown"
            >
              <img
                className="projectScreen__img--item"
                src="/remastered/assets/gipfy.png"
              />
            </div>
          </li>
          <li className="projectScreen__flex">
            <span className="projectScreen__text">
              Descripción: Realizado con javascript vainilla consumiendo una
              api, por otro lado fotos montajes con mi familia, "Mientras
              practico me divierto xD"
            </span>
            <div
              onClick={() => {
                history.push("/stars");
              }}
              className="projectScreen__img animate__animated animate__backInDown"
            >
              <img
                className="projectScreen__img--item"
                src="/remastered/assets/starswar.png"
              />
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
