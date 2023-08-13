import React from "react";
import logo from "../../images/header__logo.svg";
import "./Login.css";
import { Link, Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <section className="login__section">
      <Routes>
        <Route
          path="/"
          element={
            <Link id="signInImg" to="/">
              <img src={logo} alt="Логотип" className="login__logo" />
            </Link>
          }
        />
      </Routes>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__inputs">
          <div className="login__input">
            <label htmlFor="name-login" className="login__label">
              E-mail
            </label>
            <input
              type="email"
              id="email-login"
              className="login__name"
              minLength="2"
              maxLength="40"
              required
              name="emaillogin"
              defaultValue={"pochta@yandex.ru"}
              placeholder="Введите ваш e-mail"
            ></input>
          </div>
          <div className="login__input">
            <label htmlFor="name-login" className="login__label">
              Пароль
            </label>
            <input
              type="password"
              id="password-login"
              className="login__name"
              minLength="2"
              maxLength="40"
              required
              name="passlogin"
              defaultValue={"12345"}
              placeholder="Введите ваш пароль"
            ></input>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/" className="login__submit">
                  Войти
                </Link>
                <p className="login__question">
                  Ещё не зарегистрированы?&nbsp;
                  <Link to="/signup" className="login__login">
                  &nbsp;Регистрация
                  </Link>
                </p>
              </>
            }
          />
        </Routes>
      </form>
      </section>
    </main>
  );
};

export default Login;
