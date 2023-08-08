import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Cardlist from "./CardList/CardList";

function Movies() {
  return (
    <main>
      <SearchForm />
      <Cardlist />
    </main>
  );
}

export default Movies;
