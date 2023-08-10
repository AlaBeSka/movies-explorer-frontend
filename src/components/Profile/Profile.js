import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile">
      <section className="profile__section">
        <h1 className="profile__hello">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__input">
            <label htmlFor="name-field" className="profile__lable">
              Имя
            </label>
            <input
              type="text"
              id="name-field"
              className="profile__name"
              minLength="2"
              maxLength="40"
              required
              name="name"
              defaultValue={"Виталий"}
              placeholder="Введите ваш имя"
              disabled
            ></input>
          </div>
          <div className="profile__input">
            <label htmlFor="email-field" className="profile__lable">
              E-mail
            </label>
            <input
              type="text"
              id="email-field"
              className="profile__name"
              minLength="2"
              maxLength="40"
              required
              name="email"
              defaultValue={"pochta@yandex.ru"}
              placeholder="Введите ваш e-mail"
              disabled
            ></input>
          </div>
          <button type="button" className="profile__save">
            Сохранить
          </button>
          <button type="button" className="profile__edit">
            Редактировать
          </button>
          <button type="button" className="profile__quit">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </main>
  );
};

export default Profile;
