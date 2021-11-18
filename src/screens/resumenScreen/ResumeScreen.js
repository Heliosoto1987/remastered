//vendor
import React from "react";
//commponents
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/buttons/Button";
//styles
import "./resumeStyles/resumescreen.css";

export const ResumeScreen = () => {
  return (
    <>
      <div className="resumescreen">
        <img src="/remastered/assets/HelioSoto.jpg"></img>
        <a
          className="btn"
          href="/remastered/assets/Heliodescargar.pdf"
          download
        >
          <Button text={"Descargar"} />
        </a>
      </div>
      <Footer />
    </>
  );
};
