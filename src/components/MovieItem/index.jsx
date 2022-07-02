import React from "react";

import apiConfig from "../../api/apiConfig";

import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import { Button, OutlineButton } from "../Button";

import "./styles.scss";

const MovieItem = ({ movieItem }) => {
  // let navigate = useNavigate();

  // const watchMovie = () => {
  //   // navigate.push("/move/ + " + movies.id);
  //   navigate("/movie/", {
  //     state: { name: movieItem.id },
  //   });
  // };

  // console.log(movieItem);

  const { id, overview, poster_path, title, backdrop_path } = movieItem;

  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <div className="movie-content container">
          <div className="movie-home-card">
            <img
              className="movie-home-img"
              src={apiConfig.w500Image(
                poster_path ? poster_path : backdrop_path
              )}
              alt=""
            />
            {/* <img className="movie-home-img" src={backdrop_path} alt="" /> */}
          </div>
        </div>
        <h4 className="text-white movie-home-title">{title}</h4>
        <p className="text-gray-100 movie-home-text">
          {overview ? overview.substr(0, 100) + "..." : ""}
        </p>

        {/* <div className="btns">
          <Button onClick={watchMovie}>Watch now</Button>
          <Button>Watch now</Button>
          <OutlineButton onClick={() => console.log("trailer")}>
            Watch trailer
          </OutlineButton>
        </div> */}
      </Link>
    </div>
  );
};

export default MovieItem;
