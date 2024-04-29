import { useState } from "react";
import "./moviecomponent.css";

const MovieComponenet = ({ data }) => {
  const [languages, setLanguages] = useState(data.movielanguages);
  const [countries, setCountries] = useState(data.moviecountries);
  const [genres, setGenres] = useState(data.moviegenres);

  return (
    <div className="parent-card">
      <img src={data.moviemainphotos} alt="movie_img" className="movie_img" />
      <div className="movie_information">
        <h3 className="title">{data.movietitle}</h3>
        <p className="movie-details">
          {languages.map((l, idx) => (
            <span key={idx} className="languages">
              {l}
            </span>
          ))}
        </p>
        <p className="movie-details">
          {countries
            ? countries.map((l, idx) => (
                <span key={idx} className="languages">
                  {l}
                </span>
              ))
            : "No Countries"}
        </p>
        <p className="movie-details">
          {genres.map((l, idx) => (
            <span key={idx} className="languages">
              {l}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MovieComponenet;
