import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Cardlist from "./CardList/CardList";

function Movies() {
  return (
    <div>
      <SearchForm />
      <Cardlist />
    </div>
  );
}

export default Movies;
