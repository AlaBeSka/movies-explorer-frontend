import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__list">
          <li className="portfolio__button">
            <a
              href="https://alabeska.github.io/mesto/"
              rel="noreferrer"
              target="_blank"
              className="portfolio__link"
            >
              Статичный сайт
            </a>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </li>
          <li className="portfolio__button">
            <a
              href="https://alabeska.github.io/russian-travel/"
              rel="noreferrer"
              target="_blank"
              className="portfolio__link"
            >
              Адаптивный сайт
            </a>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </li>
          <li className="portfolio__button">
            <a
              href="https://alabeska.github.io/react-mesto-auth/"
              rel="noreferrer"
              target="_blank"
              className="portfolio__link"
            >
              Одностраничное приложение
            </a>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
