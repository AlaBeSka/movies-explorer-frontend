import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Cardlist from "./CardList/CardList";
import { useLocation } from "react-router-dom";
import AddMore from "./AddMore/AddMore";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies({
  handleSearch,
  movies,
  onAddMore,
  isMore,
  isChecked,
  setIsChecked,
  onFilterCheckbox,
  isLoading,
  onSaveMovie,
}) {
  const location = useLocation();

  return (
    <main>
      <SearchForm
        onSearch={handleSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}
      />
      {(isLoading && <Preloader />) ||
        (location.pathname === "/movies" ? (
          localStorage.nothingFound && (
            <h2 className="movies__notfound">{localStorage.nothingFound}</h2>
          )
        ) : (
          <h2 className="movies__notfound">Ничего не найдено</h2>
        )) ||
        (!isLoading && <Cardlist movies={movies} onSave={onSaveMovie} />)}
      {isMore && !isLoading && <AddMore onAddMore={onAddMore} />}
      <Footer />
    </main>
  );
}

export default Movies;






