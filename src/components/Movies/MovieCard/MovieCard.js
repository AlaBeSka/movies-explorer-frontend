import React from "react";
import "./MovieCard.css";
import movie from "../../../images/movie.png";
import { useLocation } from "react-router-dom";

function MovieCard() {
  let location = useLocation();

  return (
    <article className="card">
      <img src={movie} alt="Постер" className="card__poster" />
      <div className="card__container">
        <div className="card__description">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч42м</p>
        </div>
        <button
          className={`${
            (location.pathname === "/movies") ? "card__like" : "card__like_delete"
          }`}
        ></button>
      </div>
    </article>
  );
}

export default MovieCard;
