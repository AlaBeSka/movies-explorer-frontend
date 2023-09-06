import React from "react";
import "./PageNotFound.css";

const PageNotFound = ({ handleGoBack }) => {

  return (
    <main className="error">
      <section className="error__section">
        <h1 className="error__number">404</h1>
        <p className="error__message">Страница не найдена</p>
          <button className="error__back" onClick={handleGoBack}>
            Назад
          </button>
      </section>
    </main>
  );
};

export default PageNotFound;
