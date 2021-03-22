//vendor
import React from "react";
//hooks
import { useFetchGifs } from "../../../Hooks/useFetchGifs";
//components
import { GifGridItem } from "./GifGridItem";
//styles
import "../stylesGiphy/giphyScreen.css";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="gifGrid">
      <h1 className="gifGrid__title"> {category} </h1>

      {loading && <p className="gifGrid__loading">Loading</p>}

      <div className="gifGrid__container">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
