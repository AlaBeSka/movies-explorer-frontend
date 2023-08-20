import React from "react";
import Cardlist from "../Movies/CardList/CardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function SavedMovies({
  isLoading,
  savedMovies,
  onFilterCheckbox,
  isChecked,
  setIsChecked,
  onMovieSearch,
  onDeleteMovie,
  nothingFound,
}) {

  return (
    <main className="saved">
      <SearchForm
        onSearch={onMovieSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}
      />
      {(isLoading && <Preloader/>) ||
          (nothingFound && <h2 className="movies__notfound">{nothingFound}</h2>) ?
          (<h2 className="movies__notfound">Ничего не найдено</h2>) :
        <Cardlist
          movies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      }
      <Footer  />
    </main>
  );
};

export default SavedMovies;
