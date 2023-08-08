import React from "react";
import "./SavedMovies.css";
import Cardlist from "../Movies/CardList/CardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {
  return (
    <main className="saved">
      <SearchForm />
      <Cardlist />
    </main>
  );
}

export default SavedMovies;
