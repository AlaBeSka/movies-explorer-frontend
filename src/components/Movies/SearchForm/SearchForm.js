import React from "react";
import "./SearchForm.css";
import CheckBox from "../Checkbox/CheckBox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          name="movies"
          placeholder="Фильм"
          className="search__input"
          required
        ></input>
        <button className="search__submit" type="submit"></button>
      </form>
      <div className="search__shorts">
        <CheckBox />
        <h2 className="search__text">Короткометражки</h2>
      </div>
      <div className="search__line"></div>
    </div>
  );
}

export default SearchForm;
