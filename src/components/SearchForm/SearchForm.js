import React from "react";
import "./SearchForm.css";
import CheckBox from "../Movies/Checkbox/CheckBox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            type="text"
            name="movies"
            placeholder="Фильм"
            className="search__input"
            required
          ></input>
          <button className="search__submit" type="submit"></button>
        </div>
        <div className="search__shorts">
          <CheckBox />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
