import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/WVd61RPwsdI.jpg";

function AboutMe() {
  return (
    <section className="about" id="about-me">
      <h2 className="about__title">Студент</h2>
      <div className="about__columns">
        <div className="about__container">
          <div className="about__dev">
            <h3 className="about__name">Егор-Хаджи</h3>
            <p className="about__age">Фронтенд-разработчик, 23 года</p>
            <p className="about__description">
              Я живу в Саратове, &nbsp;Санкт-Петербурге. У Начал свое обучение
              в&nbsp;октябре 2022 года и&nbsp;то, что вы&nbsp;сейчас
              читаете&nbsp;&mdash; моя дипломная работа. Пока что это все что
              есть, но&nbsp;дальше&nbsp;&mdash; больше!
            </p>
          </div>
          <a
            href="https://github.com/AlaBeSka"
            target="_blank"
            rel="noreferrer"
            className="about__github"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="Аватар студента" className="about__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
