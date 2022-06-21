import React from "react";

import { useSelector, useDispatch } from "react-redux";
// import { useParams } from " react-router";
import { useParams } from "react-router";

import { fetchMovieDetailById } from "../../store/actions/movie";

const Detail = () => {
  const { detail } = useSelector((state) => state.movieList);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchMovieDetailById(id));
    console.log(id);
  }, [dispatch, id]);

  console.log(detail);
  return <div>Detail</div>;
};

export default Detail;
