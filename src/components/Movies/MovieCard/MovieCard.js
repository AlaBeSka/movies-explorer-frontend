import React from "react";
import "./MovieCard.css";
import { useLocation } from "react-router-dom";

function MovieCard({ movie, onSave, onDeleteMovie }) {
  const location = useLocation();
  const hours = Math.floor(movie.duration / 60);
  const min = movie.duration - hours * 60;
  const ButtonSaveClass = `${
    movie.isSaved ? "card__like card__like_active" : "card__like"
  }`;
  function handleSaveMovie(e) {
    e.preventDefault();
    onSave(movie);
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    onDeleteMovie(movie);
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        {location.pathname === "/movies" ? (
          <img
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt="Постер"
            className="card__poster"
          />
        ) : (
          <img
            src={`https://api.nomoreparties.co${movie.image}`}
            alt="Постер"
            className="card__poster"
          />
        )}
      </a>
      <div className="card__container">
        <div className="card__description">
          <h2 className="card__name">{movie.nameRU}</h2>
          <p className="card__duration">
            {hours ? `${hours}ч` : ""} {min ? `${min}м` : ""}
          </p>
        </div>
        <button
          id="buttonLike"
          className={`${
            location.pathname === "/movies"
              ? ButtonSaveClass
              : "card__like_hidden"
          }`}
          onClick={handleSaveMovie}
        ></button>
        <button
          id="buttonTrash"
          className={`${
            location.pathname === "/saved-movies"
              ? "card__like_delete"
              : "card__like_hidden"
          }`}
          onClick={handleDeleteMovie}
        ></button>
      </div>
    </article>
  );
}

export default MovieCard;
