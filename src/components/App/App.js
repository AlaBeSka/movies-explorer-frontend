import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="app">
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}

export default App;
