import React from "react";
import "./MovieCard.css";
import movie from "../../../images/movie.png";

function MovieCard() {
  return (
    <div className="card">
      <img src={movie} alt="Постер" className="card__poster" />
      <div className="card__container">
        <div className="card__description">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч42м</p>
        </div>
        <button className="card__like"></button>
      </div>
    </div>
  );
}

export default MovieCard;
