import React from "react";
import "./CardList.css";
import MovieCard from "../MovieCard/MovieCard";
import AddMore from "../AddMore/AddMore";

function Cardlist() {
  const [visibleCards, setVisibleCards] = React.useState(12);

  const handleShowMore = () => {
    setVisibleCards(prevVisibleCards => {
      const remainingCards = 16 - prevVisibleCards; // Вычисляем количество оставшихся карточек

      // Возвращаем либо 12, либо оставшиеся карточки
      return prevVisibleCards + Math.min(12, remainingCards);
    });
  };

  return (
    <>
    <section className="movies">
      {[...Array(visibleCards)].map((_, index) => <MovieCard key={index}/>)}
    </section>
    {visibleCards < 16 && <AddMore handleShowMore={handleShowMore}/>}
    </>
  );
}

export default Cardlist;
