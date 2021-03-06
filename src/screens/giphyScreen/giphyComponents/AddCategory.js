//vendor
import React, { useState } from "react";
//propTypes
import PropTypes from "prop-types";
//styles
import "../stylesGiphy/giphyScreen.css";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 1) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form className="gifScreen__from" onSubmit={handleSubmit}>
      <input
        className="gifScreen__input"
        placeholder="Escribe aqui"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="gifScreen__buttom" type="submit">
        Buscar
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
