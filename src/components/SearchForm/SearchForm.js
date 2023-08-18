/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./SearchForm.css";
import CheckBox from "../Movies/Checkbox/CheckBox";
import useForm from "../../utils/useForm";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearch, isChecked, setIsChecked, onFilterCheckbox }) {
  const location = useLocation();
  const { formValue, handleChange, setInput } = useForm();

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setInput(localStorage.input);
    } else {
      setInput("");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({
      input: formValue.movie,
    });
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            className="search__input"
            value={formValue.movie || ""}
            onChange={handleChange}
            minLength="1"
            required
          ></input>
          <button className="search__submit" type="submit"></button>
        </div>
        <div className="search__shorts">
          <CheckBox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            onFilterCheckbox={onFilterCheckbox}
          />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
