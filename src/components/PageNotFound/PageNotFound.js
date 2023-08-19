import React from "react";
import "./PageNotFound.css";

const PageNotFound = ({ loggedIn }) => {
  return (
    <main className="error">
      <section className="error__section">
        <h1 className="error__number">404</h1>
        <p className="error__message">Страница не найдена</p>
        {loggedIn ? (
          <a href="/movies" className="error__back">
            Назад
          </a>
        ) : (
          <a href="/" className="error__back">
            Назад
          </a>
        )}
      </section>
    </main>
  );
};

export default PageNotFound;
