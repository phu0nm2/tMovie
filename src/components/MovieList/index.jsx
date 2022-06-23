import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMovieList, fetchMovieSimilar } from "../../store/actions/movie";

import MovieItem from "../MovieItem";
import Layout from "../../HOCs/Layout";

import "./style.scss";

const MovieList = ({ type }) => {
  const dispatch = useDispatch();
  const { loading, movieList } = useSelector((state) => state.movieList);

  React.useEffect(() => {
    dispatch(fetchMovieList(type));
  }, [dispatch, type]);

  // React.useEffect(() => {
  //   if (type !== "similar") {
  //     switch (category) {
  //       case category.movie:
  //         dispatch(fetchMovieList(type));
  //         break;

  //       // case category.tv:
  //       //   dispatch(fetchTvList(type));
  //       //   break;
  //       default:
  //         dispatch(fetchTvList(type));

  //       // dispatch(fetchMovieList(type));
  //     }
  //   } else {
  //     dispatch(fetchMovieSimilar(idSimilar));
  //   }

  //   // dispatch(fetchMovieList(movieType.top_rated));
  // }, [dispatch, idSimilar, type]);

  // if (loading) return <div>loading...</div>;

  return (
    <Layout loading={loading}>
      <div className="bg-gray-900">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {movieList?.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={3}>
                  <MovieItem movieItem={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default MovieList;
