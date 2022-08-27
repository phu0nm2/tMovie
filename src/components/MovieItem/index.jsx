import React from "react";

import apiConfig from "../../api/apiConfig";

import { Link } from "react-router-dom";

import "./styles.scss";

const MovieItem = ({ movieItem }) => {
  const { id, overview, poster_path, title, backdrop_path, known_for, name } =
    movieItem;

  const renderImg = () =>
    known_for?.slice(0, 1).map((imgItem) => (
      <React.Fragment key={imgItem.id}>
        <img
          className="movie-home-img"
          src={apiConfig.w500Image(
            imgItem.poster_path ? imgItem.poster_path : imgItem.backdrop_path
          )}
          alt="hinh anh"
        />

        <h4
          className="text-white movie-home-title"
          style={{ zIndex: 1, marginTop: 380 }}
        >
          {imgItem.title ? imgItem.title : imgItem.name}
        </h4>

        <p className="text-gray-100 movie-home-text" style={{ zIndex: 1 }}>
          {imgItem.overview ? imgItem.overview.substr(0, 100) + "..." : ""}
        </p>
      </React.Fragment>
    ));

  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <div className="movie-content container">
          <div className="movie-home-card">
            {!!poster_path && !!backdrop_path && (
              <img
                className="movie-home-img"
                src={
                  poster_path
                    ? apiConfig.w500Image(poster_path)
                    : backdrop_path
                    ? apiConfig.w500Image(backdrop_path)
                    : {}
                }
                alt="hinh anh"
              />
            )}
            {!!known_for && renderImg()}
          </div>
        </div>
        <h4 className="text-white movie-home-title">{title ? title : name}</h4>
        <p className="text-gray-100 movie-home-text">
          {overview ? overview.substr(0, 100) + "..." : ""}
        </p>
      </Link>
    </div>
  );
};

export default MovieItem;
