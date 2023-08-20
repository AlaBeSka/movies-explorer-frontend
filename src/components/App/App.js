/* eslint-disable react-hooks/exhaustive-deps */
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { React, useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { UserContext } from "../../context/UserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import auth from "../../utils/Auth";
import ProtectedRoute from "../../utils/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [firstMoviesAmount, setFirstMoviesAmount] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [addMoviesAmount, setAddMoviesAmount] = useState(0);
  const [isMore, setIsMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [isFilterCheckedMoviesSaved, setIsFilterCheckedMoviesSaved] =
    useState(false);
  const [isInputMoviesSaved, setIsInputMoviesSaved] = useState("");
  const [nothingFoundInSaved, setNothingFoundInSaved] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageProfile, setErrorMessageProfile] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isPreloaderLoading, setIsPreloaderLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cbCheckToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          console.log(res);
          if (res) {
            setLoggedIn(true);
            if (location.pathname !== "/") {
              const lastPath = location.pathname;
              navigate(lastPath, { replace: true });
            } else {
              navigate("/", { replace: true });
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    cbCheckToken();
  }, []);

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath) {
      navigate(lastPath, { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    setIsPreloaderLoading(true);
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([data, movies]) => {
          setCurrentUser(data.user);
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsPreloaderLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    setIsPreloaderLoading(true);
    if (location.pathname === "/saved-movies") {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setIsFilterCheckedMoviesSaved(false);
          setSavedMovies(movies);
          setNothingFoundInSaved("");
        })
        .catch((err) => console.log(err));
    } else if (location.pathname === "/movies") {
      if (localStorage.isFilterChecked === "true") {
        setIsFilterChecked(true);
      } else setIsFilterChecked(false);
    } else if (location.pathname === "/profile") {
      setIsEditing(false);
      setErrorMessageProfile("");
    }
    setIsPreloaderLoading(false);
  }, [location]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function setMoviesAmounts() {
    if (windowSize.innerWidth > 1007) {
      setFirstMoviesAmount(12);
      setAddMoviesAmount(3);
    } else if (windowSize.innerWidth > 760) {
      setFirstMoviesAmount(8);
      setAddMoviesAmount(2);
    } else {
      setFirstMoviesAmount(5);
      setAddMoviesAmount(2);
    }
  }

  useEffect(() => {
    if (localStorage.renderedMovies) {
      const parsedMovies = JSON.parse(localStorage.renderedMovies);
      setMovies(parsedMovies);
      setMovies(parsedMovies.slice(0, firstMoviesAmount));
      setFilterMovies(JSON.parse(localStorage.renderedMovies));
      setMoviesAmounts();
      if (parsedMovies.length <= firstMoviesAmount) {
        setIsMore(false);
      } else setIsMore(true);
    } else {
      setMoviesAmounts();
    }
  }, [windowSize, loggedIn]);

  function handleSaveMovie(movie) {
    if (movie.isSaved) {
      let movieForDelete = savedMovies.find((mov) => mov.movieId === movie.id);
      mainApi
        .deleteMovie(movieForDelete?._id)
        .then((newMovie) => {
          // Обновление состояния movies после удаления фильма
          setMovies((prevMovies) => {
            return prevMovies.map((mov) =>
              mov.id === movie.id ? { ...mov, isSaved: false } : mov
            );
          });

          // Обновление состояния filterMovies после удаления фильма
          setFilterMovies((prevFilterMovies) => {
            return prevFilterMovies.map((mov) =>
              mov.id === movie.id ? { ...mov, isSaved: false } : mov
            );
          });

          // Обновление состояния savedMovies после удаления фильма
          setSavedMovies((prevSavedMovies) =>
            prevSavedMovies.filter(
              (mov) => mov.movieId !== newMovie.myMovie.movieId
            )
          );
        })
        .catch((err) => console.log(err));
    } else {
      mainApi
        .saveMovie(movie)
        .then((newMovie) => {
          movie.isSaved = true;

          // Обновление состояния movies после сохранения фильма
          setMovies((prevMovies) => {
            return prevMovies.map((mov) =>
              mov.id === newMovie.movieId ? { ...mov, isSaved: true } : mov
            );
          });

          // Обновление состояния filterMovies после сохранения фильма
          setFilterMovies((prevFilterMovies) => {
            return prevFilterMovies.map((mov) =>
              mov.id === newMovie.movieId ? { ...mov, isSaved: true } : mov
            );
          });

          // Обновление состояния savedMovies после сохранения фильма
          setSavedMovies([...savedMovies, newMovie]);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((mov) => mov._id !== movie._id));
        movie.isSaved = false;

        // Обновление состояния movies после удаления фильма
        setMovies((prevMovies) => {
          return prevMovies.map((mov) =>
            mov.id === movie.movieId ? { ...mov, isSaved: false } : mov
          );
        });

        // Обновление состояния filterMovies после удаления фильма
        setFilterMovies((prevFilterMovies) => {
          return prevFilterMovies.map((mov) =>
            mov.id === movie.movieId ? { ...mov, isSaved: false } : mov
          );
        });

        localStorage.setItem("renderedMovies", JSON.stringify(filterMovies));
      })
      .catch((err) => console.log(err));
  }

  function handleSavedFilterCheck(checked) {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        let filtered = handleFilterMovies(checked, data, isInputMoviesSaved);
        if (filtered.length !== 0) {
          setNothingFoundInSaved("");
          setSavedMovies(filtered);
        } else {
          setNothingFoundInSaved("Ничего не найдено");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleRegister(formValue) {
    setIsAuthLoading(true);
    auth
      .register(formValue.email, formValue.password, formValue.name)
      .then((res) => {
        if (res) {
          handleLogin(formValue);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function handleLogin(formValue) {
    setIsAuthLoading(true);
    auth
      .authorize(formValue.email, formValue.password)
      .then((res) => {
        if (res.token) {
          console.log(res.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          setErrorMessage(err.validation.body.message);
        } else {
          setErrorMessage(err.message);
        }
      })
      .finally(() => setIsAuthLoading(false));
  }

  function handleFilterMovies(checkbox, data, inputData) {
    if (checkbox) {
      return data.filter(
        (movie) =>
          movie.duration < 40 &&
          movie.nameRU.toLowerCase().includes(inputData.toLowerCase())
      );
    } else {
      return data.filter((movie) =>
        movie.nameRU.toLowerCase().includes(inputData.toLowerCase())
      );
    }
  }

  function handleCompareMovies(filteredArr) {
    filteredArr.forEach((filterMovie) => {
      savedMovies.forEach((savedMovie) => {
        if (filterMovie.id === savedMovie.movieId) {
          filterMovie.isSaved = true;
        }
      });
    });
  }

  function handleRenderMovies(filteredArr) {
    if (filteredArr.length === 0) {
      localStorage.setItem("nothingFound", "Ничего не найдено");
      localStorage.setItem("renderedMovies", "");
    } else {
      setFilterMovies(filteredArr);
      const renderedMovies =
        filteredArr.slice(0, firstMoviesAmount) || filteredArr;
      setMovies(renderedMovies);
      localStorage.setItem("renderedMovies", JSON.stringify(filteredArr));
      localStorage.setItem("nothingFound", "");
    }
    if (filteredArr.length <= firstMoviesAmount) {
      setIsMore(false);
    } else setIsMore(true);
  }

  function handleMovieSearch(input) {
    setIsLoading(true);
    localStorage.setItem("input", input.input);
    moviesApi
      .getMovies()
      .then((data) => {
        const filtered = handleFilterMovies(
          localStorage.isFilterChecked === "true",
          data,
          input.input
        );
        handleCompareMovies(filtered);
        handleRenderMovies(filtered);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleAddMoreMovie() {
    if (isLoading) {
      return;
    }

    const startIndex = movies.length;
    const endIndex = startIndex + addMoviesAmount;
    if (endIndex >= filterMovies.length) {
      setMovies(filterMovies);
      setIsMore(false);
    } else {
      setMovies(filterMovies.slice(0, endIndex));
    }
  }

  useEffect(() => {
    if (filterMovies.length <= firstMoviesAmount) {
      setIsMore(false);
    } else {
      setIsMore(true);
      setMovies(filterMovies.slice(0, firstMoviesAmount));
    }
  }, [windowSize, loggedIn, filterMovies]);

  function handleSavedMovieSearch(input) {
    setIsLoading(true);
    setIsInputMoviesSaved(input.input);
    mainApi
      .getSavedMovies()
      .then((data) => {
        let filtered = handleFilterMovies(
          localStorage.isFilterCheckedMoviesSaved === "true",
          data,
          input.input
        );
        if (filtered.length !== 0) {
          setNothingFoundInSaved("");
          setSavedMovies(filtered);
        } else {
          setNothingFoundInSaved("Ничего не найдено");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleFilterCheck(checked) {
    if (checked) {
      localStorage.setItem("isFilterChecked", true);
    } else localStorage.setItem("isFilterChecked", false);
    if (localStorage.input) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((data) => {
          let filtered = handleFilterMovies(checked, data, localStorage.input);
          handleRenderMovies(filtered);
          handleCompareMovies(filtered);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function onEditProfileSubmit(formValue) {
    setIsLoading(true);
    mainApi
      .editProfile(formValue)
      .then((data) => {
        setCurrentUser(data.user);
        setErrorMessageProfile("");
        setIsEditing(false);
        alert("Изменения сохранены");
      })
      .catch((err) => {
        setErrorMessageProfile(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setMovies([]);
    setSavedMovies([]);
    setLoggedIn(false);
    setFilterMovies([]);
    setErrorMessage("");
    setIsFilterChecked(false);
    setIsFilterCheckedMoviesSaved(false);
    setCurrentUser("");
    setErrorMessageProfile("");
  }

  return isPreloaderLoading ? (
    <Preloader />
  ) : (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Header onOpenMenu={() => setIsMenuOpen(true)} loggedIn={loggedIn} />
        <Routes>
          <Route key="*" path="*" element={<PageNotFound loggedIn={loggedIn} />} />
          <Route key="main" path="/" element={<Main />} />
          <Route
          key="signup"
            path="/signup/*"
            element={
              loggedIn ? <navigate to="/" /> :
              <Register
                handleRegister={handleRegister}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isAuthLoading={isAuthLoading}
              />
            }
          />
          <Route
          key="signin"
            path="/signin"
            element={
              loggedIn ? <navigate to="/" /> :
              <Login
                handleLogin={handleLogin}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isAuthLoading={isAuthLoading}
              />
            }
          />
          <Route
          key="movies"
            path="/movies"
            element={
              <>
                <ProtectedRoute
                  element={Movies}
                  handleSearch={handleMovieSearch}
                  movies={movies}
                  onAddMore={handleAddMoreMovie}
                  isMore={isMore}
                  isLoading={isLoading}
                  isChecked={isFilterChecked}
                  setIsChecked={setIsFilterChecked}
                  onFilterCheckbox={handleFilterCheck}
                  onSaveMovie={handleSaveMovie}
                  loggedIn={loggedIn}
                />
              </>
            }
          />
          <Route
          key="profile"
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoading={isLoading}
                onLogout={handleLogout}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onEditProfileSubmit={onEditProfileSubmit}
                errorMessageProfile={errorMessageProfile}
                loggedIn={loggedIn}
                buttonDisabled={buttonDisabled}
                setButtonDisabled={setButtonDisabled}
              />
            }
          />
          <Route
          key="saved-movies"
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                onAddMore={handleAddMoreMovie}
                isLoading={isLoading}
                savedMovies={savedMovies}
                onFilterCheckbox={handleSavedFilterCheck}
                isChecked={isFilterCheckedMoviesSaved}
                setIsChecked={setIsFilterCheckedMoviesSaved}
                onMovieSearch={handleSavedMovieSearch}
                onDeleteMovie={handleDeleteMovie}
                nothingFound={nothingFoundInSaved}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
        <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
