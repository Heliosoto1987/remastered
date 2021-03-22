//vendor
import React from "react";
//styles
import "../stylesGiphy/giphyScreen.css";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="giphyItem">
      <div className="giphyItem__img">
        <img className="giphyItem__img--item" src={url} alt={title} />
      </div>
    </div>
  );
};
