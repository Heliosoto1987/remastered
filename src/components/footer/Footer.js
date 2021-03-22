//vendor
import React from "react";
//styles
import "./stylesFooter/navfooter.css";

export const Footer = () => {
  return (
    <footer className="navfooter">
      <span className="navfooter__text">heliosoto17@gmail.com</span>
      <a
        target="_blank"
        href="https://www.facebook.com/helio.soto.5/"
        className="navfooter__facebook"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/Heliosoto1987"
        className="navfooter__github"
      >
        <i className="fab fa-github-square"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/helio-javier-soto-arevalo-78b9261b9/"
        className="navfooter__linkedin"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  );
};
