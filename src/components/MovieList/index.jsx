import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMovieList } from "../../store/actions/movie";
import MovieItem from "../MovieItem";
import Layout from "../../HOCs/Layout";

import "./style.scss";

const MovieList = () => {
  const dispatch = useDispatch();
  const { loading, movieList } = useSelector((state) => state.movieList);

  React.useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  // if (loading) return <div>loading...</div>;

  return (
    <Layout loading={loading}>
      <div className="bg-gray-900">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {movieList?.map((movies) => {
              return (
                <Grid key={movies.id} item xs={12} sm={6} md={3}>
                  <MovieItem movies={movies} />
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
