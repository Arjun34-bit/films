import { useEffect, useState } from "react";
import "./App.css";
import MovieComponenet from "./components/MovieComponent";

import { TiSortAlphabetically } from "react-icons/ti";
import { GiFilmSpool } from "react-icons/gi";
import { FaFilter } from "react-icons/fa";

import data from "./data/data.json";
import Portal from "./Portal/Portal.jsx";
function App() {
  const [movies, setMovies] = useState(data);
  const [page, setPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const allLanguages = movies.reduce((acc, movie) => {
    return acc.concat(movie.movielanguages);
  }, []);

  const allGenres = movies.reduce((acc, movie) => {
    return acc.concat(movie.moviegenres);
  }, []);

  const allCountries = movies.reduce((acc, movie) => {
    return acc.concat(movie.moviecountries);
  }, []);

  // Create sets to remove duplicates
  const uniqueLanguages = [...new Set(allLanguages)];
  const uniqueGenres = [...new Set(allGenres)];
  const uniqueCountries = [...new Set(allCountries)];

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCheckboxChange = (e, type) => {
    const value = e.target.name;
    switch (type) {
      case "language":
        setSelectedLanguages((prev) =>
          e.target.checked
            ? [...prev, value]
            : prev.filter((lang) => lang !== value)
        );
        break;
      case "genre":
        setSelectedGenres((prev) =>
          e.target.checked
            ? [...prev, value]
            : prev.filter((genre) => genre !== value)
        );
        break;
      case "country":
        setSelectedCountries((prev) =>
          e.target.checked
            ? [...prev, value]
            : prev.filter((country) => country !== value)
        );
        break;
      default:
        break;
    }
  };

  const handleClearAll = () => {
    setSelectedLanguages([]);
    setSelectedGenres([]);
    setSelectedCountries([]);
  };

  const handleApplyFilters = () => {
    // Apply filters based on selectedLanguages, selectedGenres, selectedCountries
    console.log("Languages:", selectedLanguages);
    console.log("Genres:", selectedGenres);
    console.log("Countries:", selectedCountries);
  };
  const handlePagination = (pgs) => {
    setPage(pgs);
  };
  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <h2>Movie List</h2>
          <div className="options">
            <button className="btn">
              <GiFilmSpool /> Arjun
            </button>
          </div>
        </div>
      </div>
      <div className="pagination-bar">
        <div className="filter-btn">
          <button onClick={() => setIsOpen(true)} className="btn">
            <FaFilter />
            filter
            <Portal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="checkBox-container">
                <div className="lang">
                  <h3 className="head">Languages</h3>
                  {uniqueLanguages.map((item) => (
                    <div key={item.id} className="lang-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name={item}
                          checked={selectedLanguages.includes(item)}
                          onChange={(e) => handleCheckboxChange(e, "language")}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="lang">
                  <h3 className="head">Genre</h3>
                  {uniqueGenres.map((item) => (
                    <div key={item.id} className="lang-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name={item}
                          checked={selectedGenres.includes(item)}
                          onChange={(e) => handleCheckboxChange(e, "genre")}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="lang">
                  <h3 className="head">Countries</h3>
                  {uniqueCountries.map((item) => (
                    <div key={item.id} className="lang-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name={item}
                          checked={selectedCountries.includes(item)}
                          onChange={(e) => handleCheckboxChange(e, "country")}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottom-btn">
                <button onClick={handleClearAll}>Clear All</button>
                <button onClick={handleApplyFilters}>Apply</button>
              </div>
            </Portal>
          </button>
        </div>
        {movies.length > 0 && (
          <div className="pagination">
            {[...Array(movies.length / 10)].map((i, pg) => (
              <span
                key={i}
                className={page === pg + 1 ? "pg-btn-selected" : "pg-btn"}
                onClick={() => handlePagination(pg + 1)}
              ></span>
            ))}
          </div>
        )}
      </div>
      <div className="main">
        <div className="inner-box">
          <div className="card-container">
            {movies.slice(page * 10 - 10, page * 10).map((movie) => (
              <MovieComponenet data={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
