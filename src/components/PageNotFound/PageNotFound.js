import React from 'react';
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <main className="error">
      <section className='error__section'>
      <h1 className="error__number">404</h1>
      <p className="error__message">Страница не найдена</p>
      <a href="/" className="error__back">Назад</a>
      </section>
    </main>
  );
};

export default PageNotFound;