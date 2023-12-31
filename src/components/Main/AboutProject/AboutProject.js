import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__container">
        <div className="project__columns">
          <article className="project__info">
            <h3 className="project__name">Дипломный проект включал 5 этапов</h3>
            <p className="project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </article>
          <article className="project__info">
            <p className="project__name">На выполнение диплома ушло 5 недель</p>
            <p className="project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className="project__period">
          <p className="project__week project__week_left">1 неделя</p>
          <p className="project__week project__week_right">4 неделя</p>
          <p className="project__week-name">Back-end</p>
          <p className="project__week-name">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
