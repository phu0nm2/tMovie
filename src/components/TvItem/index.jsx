import React from "react";

import apiConfig from "../../api/apiConfig";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const TvItem = ({ tvItem }) => {
  let navigate = useNavigate();

  const { id, overview, poster_path, backdrop_path, name, original_name } =
    tvItem;

  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <div className="movie-content container">
          <div className="movie-home-card">
            <img
              className="movie-home-img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={apiConfig.w500Image(
                poster_path ? poster_path : backdrop_path
              )}
              alt=""
            />
            {/* <img className="movie-home-img" src={backdrop_path} alt="" /> */}
          </div>
        </div>
        <h4 className="text-white movie-home-title">{name}</h4>
        <p className="text-gray-100 movie-home-text">
          {overview ? overview.substr(0, 100) + ".." : original_name}
        </p>
      </Link>
    </div>
  );
};

export default TvItem;
