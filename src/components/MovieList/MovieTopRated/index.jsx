import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMovieTopRated } from "../../../store/actions/movie";

import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";

import "./style.scss";

const MovieTopRated = (props) => {
  const dispatch = useDispatch();
  const { movieTopRated } = useSelector((state) => state.movies);

  React.useEffect(() => {
    const params = { page: 1 };
    dispatch(fetchMovieTopRated({ params }));
  }, [dispatch, props]);

  // if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <div className="bg-gray-900">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {movieTopRated?.results?.slice(0, 4).map((item) => {
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
export default MovieTopRated;
