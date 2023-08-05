import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Cardlist from "./CardList/CardList";
import AddMore from "./AddMore/AddMore";

function Movies() {
  return (
    <>
      <SearchForm />
      <Cardlist />
      <AddMore />
    </>
  );
}

export default Movies;
