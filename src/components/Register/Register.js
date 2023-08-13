import React from "react";
import "./Register.css";
import logo from "../../images/header__logo.svg";
import { Link, Route, Routes } from "react-router-dom";

const Register = () => {
  return (
    <main className="register">
      <section className="register__section">
        <Routes>
          <Route
            path="/"
            element={
              <Link id="signInImg" to="/">
                <img src={logo} alt="Логотип" className="register__logo" />
              </Link>
            }
          />
        </Routes>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <div className="register__inputs">
            <div className="register__input">
              <label htmlFor="name-register" className="register__label">
                Имя
              </label>
              <input
                type="text"
                id="name-register"
                className="register__name"
                minLength="2"
                maxLength="40"
                required
                name="nameRegister"
                defaultValue={"Виталий"}
                placeholder="Введите ваш имя"
              ></input>
            </div>
            <div className="register__input">
              <label htmlFor="name-register" className="register__label">
                E-mail
              </label>
              <input
                type="email"
                id="email-register"
                className="register__name"
                minLength="2"
                maxLength="40"
                required
                name="emailRegister"
                defaultValue={"pochta@yandex.ru"}
                placeholder="Введите ваш e-mail"
              ></input>
            </div>
            <div className="register__input">
              <label htmlFor="name-register" className="register__label">
                Пароль
              </label>
              <input
                type="password"
                id="password-register"
                className="register__name"
                minLength="2"
                maxLength="40"
                required
                name="passRegister"
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
                  <Link to="/signin" className="register__submit">
                    Зарегестрироваться
                  </Link>
                  <p className="register__question">
                    Уже зарегистрированы?
                    <Link to="/signin" className="register__login">
                      {" "}
                      Войти
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

export default Register;
