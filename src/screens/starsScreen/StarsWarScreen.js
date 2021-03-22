//vendor
import React from "react";
//styles
import "./stylesStarts/starswars.css";

export const StarsWarScren = () => {
  return (
    <div className="starswarsscren">
      <div className="starswarsscren__img--container">
        <img
          className="starswarsscren__img--name"
          src="https://raw.githubusercontent.com/Heliosoto1987/images/50b6df31c0e79ff161b9b7aa749e3f096c976ffc/portafolios/starwarsLetters.svg"
        />
      </div>
      <div className="starswarsscren__img--ship">
        <img
          className="starswarsscren__img--name"
          src="https://cdn.pixabay.com/photo/2018/08/07/14/14/spacecraft-3589965_960_720.png"
        />
      </div>

      <div className="starswarsscren__buttom">
        <a
          className="starswarsscren__buttom--inside"
          target="_blank"
          href="https://heliosoto1987.github.io/proyect-star-wars/"
        >
          Ver
        </a>
        <img
          className="starswarsscren__buttom--img"
          src="https://github.com/Heliosoto1987/images/blob/master/portafolios/starwars.png?raw=true"
        />
      </div>
    </div>
  );
};
