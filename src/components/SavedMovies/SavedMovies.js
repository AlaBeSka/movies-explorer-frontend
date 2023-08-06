import React from "react";
import "./SavedMovies.css";
import Cardlist from "../Movies/CardList/CardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {
  return (
    <div className="saved">
      <SearchForm />
      <Cardlist />
    </div>
  );
}

export default SavedMovies;
