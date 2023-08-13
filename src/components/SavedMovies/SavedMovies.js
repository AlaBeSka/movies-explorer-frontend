import React from "react";
import Cardlist from "../Movies/CardList/CardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <Cardlist />
    </main>
  );
}

export default SavedMovies;
