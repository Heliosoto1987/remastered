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
              <img src="https://avatars.githubusercontent.com/u/54855884?s=400&u=4d85097e35af3e100269eb43e3673864a1da064b&v=4"></img>
            </div>
          </h1>
          <div className="aboutContainer__hi">
            Busco activamente mi oportunidad como programador front-end. Siempre
            ligado al mundo del IT, antes orientado hacia el hardware, y ahora a
            al software. La programación me apasionó al instante y me encanta
            ampliar día a día mis conocimientos. Actualmente estoy realizando un
            curso para dar el salto a fullstack con el stack MERN, con objetivo
            de desarrollarme como profesional aprendo también sobre diseño web.
            Espero les guste mi página.
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
