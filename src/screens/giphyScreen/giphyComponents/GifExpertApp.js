//vendor
import React, { useState } from "react";
//components
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
//styles
import "../stylesGiphy/giphyScreen.css";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["coding"]);

  return (
    <div className="gifScreen">
      <header className="gifScreen__header">
        <div className="gifScreen__title">
          <div>GIPHY</div>
          <div>Developers Api</div>
        </div>
        <AddCategory setCategories={setCategories} />
      </header>
      <ol className="gifScreen__main">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
