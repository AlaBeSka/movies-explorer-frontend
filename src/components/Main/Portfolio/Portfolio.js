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
              <img src={arrow} alt="стрелка" className="portfolio__arrow" />
            </a>
          </li>
          <li className="portfolio__button">
            <a
              href="https://alabeska.github.io/russian-travel/"
              rel="noreferrer"
              target="_blank"
              className="portfolio__link"
            >
              Адаптивный сайт
              <img src={arrow} alt="стрелка" className="portfolio__arrow" />
            </a>
          </li>
          <li className="portfolio__button">
            <a
              href="https://alabeska.github.io/react-mesto-auth/"
              rel="noreferrer"
              target="_blank"
              className="portfolio__link"
            >
              Одностраничное приложение
              <img src={arrow} alt="стрелка" className="portfolio__arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
