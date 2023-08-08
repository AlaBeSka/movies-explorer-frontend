import React from "react";
import "./Promo.css";
import logoLand from "../../../images/landing__logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__description">Учебный проект студента факультета<br />Веб-разработки.</h1>
        <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button id="promo-button" className="promo__more-info">Узнать больше</button>
      </div>
      <img className="promo__logo" src={logoLand} alt="logo"/>
    </section>
  );
}

export default Promo;
