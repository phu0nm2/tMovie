import React from "react";

import MoviePopular from "./MoviePopular";
import MovieTopRated from "./MovieTopRated";
import MovieUpComing from "./MovieUpComing";
import "./styles.scss";

const MovieList = () => {
  return (
    <>
      <div className="movie-list">
        <div className="home__movie">
          <h2 className="home__movie-title">Trending Movies</h2>
          <MoviePopular></MoviePopular>
        </div>

        <div className="home__movie">
          <h2 className="home__movie-title">Top Rated Movies</h2>
          <MovieTopRated></MovieTopRated>
        </div>

        <div className="home__movie">
          <h2 className="home__movie-title">Up Coming Movies</h2>
          <MovieUpComing></MovieUpComing>
        </div>
      </div>
    </>
  );
};

export default MovieList;
