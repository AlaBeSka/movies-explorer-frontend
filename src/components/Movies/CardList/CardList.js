import React from "react";
import "./CardList.css";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../../Footer/Footer";

function Cardlist({ movies, onSave, onDeleteMovie }) {
  return (
    <>
    <section className="movies">
    {movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSave={onSave}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
    </section>
    <Footer />
    </>
  );
}

export default Cardlist;
