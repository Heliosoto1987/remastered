//vendor
import React from "react";
//styles
import "./button.css";

export const Button = ({ text, handle, value }) => {
  return (
    <button className="components__button" onClick={handle} value={value}>
      {text}
    </button>
  );
};
