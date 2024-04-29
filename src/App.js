import { useState } from "react";
import "./App.css";
import MovieComponenet from "./components/MovieComponent";

import { TiSortAlphabetically } from "react-icons/ti";
import { FaFilter } from "react-icons/fa";

import data from "./data/data.json";
function App() {
  const [movie, setMovie] = useState(data);
  const slicedMovie = movie.slice(0, 8);
  console.log(movie);
  return (
    <>
      <div className="header">
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
      <div className="main">
        <div className="inner-box">
          <div className="card-container">
            {slicedMovie.map((movie) => (
              <MovieComponenet data={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
