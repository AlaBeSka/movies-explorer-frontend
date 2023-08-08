import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  let location = useLocation();

  return (
    <footer
      className={`${
        (location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/")
          ? "footer"
          : "footer__hidden"
      }`}
    >
      <div className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__container">
        <p className="footer__year">&#169; 2023</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlaBeSka"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
