import { useState } from "react";
import "./moviecomponent.css";

const MovieComponenet = ({ data }) => {
  const [languages, setLanguages] = useState(data.movielanguages);
  const [countries, setCountries] = useState(data.moviecountries);
  const [genres, setGenres] = useState(data.moviegenres);

  //For Languages
  const slicedLanguages = languages.slice(0, 3);
  const hasMoreLang = languages.length > 3;

  //For Countries
  const slicedCountries = countries.slice(0, 2);
  const hasMoreCount = countries.length > 2;

  //For Genres
  const slicedGenre = genres.slice(0, 2);
  const hasMoreGen = genres.length > 2;

  return (
    <div className="parent-card">
      <img src={data.moviemainphotos} alt="movie_img" className="movie_img" />
      <div className="movie_information">
        <h3 className="title">{data.movietitle}</h3>
        <p className="">
          {slicedLanguages.map((l, idx) => (
            <span key={idx} className="languages">
              {l}
            </span>
          ))}
          {hasMoreLang && (
            <span style={{ fontWeight: "600", marginLeft: "5px" }}>+</span>
          )}
        </p>
        <p className="">
          {slicedCountries
            ? slicedCountries.map((l, idx) => (
                <span key={idx} className="languages">
                  {l}
                </span>
              ))
            : "No Countries"}
          {hasMoreCount && (
            <span style={{ fontWeight: "600", marginLeft: "5px" }}>+</span>
          )}
        </p>
        <p className="">
          {slicedGenre.map((l, idx) => (
            <span key={idx} className="languages">
              {l}
            </span>
          ))}
          {hasMoreGen && (
            <span style={{ fontWeight: "600", marginLeft: "5px" }}>+</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieComponenet;
