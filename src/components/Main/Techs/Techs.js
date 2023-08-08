import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__name">Технологии</div>
      <h2 className="techs__title">7 технологий</h2>
      <h3 className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h3>
      <ul  className="techs__list">
        <li className="techs__element">HTML</li>
        <li className="techs__element">CSS</li>
        <li className="techs__element">JS</li>
        <li className="techs__element">React</li>
        <li className="techs__element">Git</li>
        <li className="techs__element">Express.js</li>
        <li className="techs__element">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
