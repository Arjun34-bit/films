import { useEffect, useState } from "react";
import "./App.css";
import MovieComponenet from "./components/MovieComponent";

import { TiSortAlphabetically } from "react-icons/ti";
import { FaFilter } from "react-icons/fa";

import data from "./data/data.json";
function App() {
  const [movies, setMovies] = useState(data);
  const [page, setPage] = useState(1);

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
              <TiSortAlphabetically />
              sort
            </button>
            <button className="btn">
              <FaFilter />
              filter
            </button>
          </div>
        </div>
      </div>
      <div className="pagination-bar">
        {movies.length > 0 && (
          <div className="pagination">
            <span className="pg-btn">&larr;</span>
            {[...Array(movies.length / 10)].map((i, pg) => (
              <span
                key={i}
                className={page === pg + 1 ? "pg-btn-selected" : "pg-btn"}
                onClick={() => handlePagination(pg + 1)}
              >
                {pg + 1}
              </span>
            ))}
            <span className="pg-btn">&rarr;</span>
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
