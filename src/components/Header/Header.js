import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__container">
        <button href="#" className="header__link">
          Регистрация
        </button>
        <button href="#" className="header__link header__link_log">
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
