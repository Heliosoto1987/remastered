//vendor
import React from "react";
//components
import { Footer } from "../../components/footer/Footer";
//styles
import "./aboutstyles/aboutstyles.css";

export const AboutScreen = () => {
  return (
    <>
      <div className="aboutGrid">
        <div className="aboutContainer">
          <h1 className="aboutContainer__title">
            Sobre mí{" "}
            <div className="aboutContainer__img">
              <img src="https://github.com/Heliosoto1987/remastered/blob/master/public/assets/Helio%201.jpg?raw=true"></img>
            </div>
          </h1>
          <div className="aboutContainer__hi">
            Soy un programador Full Stack, autodidacta con stack MERN, he
            desarrollado aplicaciones usando los servicios de firebase, me
            encanta la programación por que día a día debo resolver problemas
            utilizando la lógica. Lo genial de programar web es que cualquier
            dispositivo electrónico donde se pueda abrir un navegador web vamos
            a poder ejecutar nuestra aplicación.
          </div>
          <div className="aboutContainer__bye">
            Muchas gracias por dedicarme su tiempo.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
