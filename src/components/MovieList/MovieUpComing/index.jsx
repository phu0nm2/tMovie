import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMovieUpComing } from "../../../store/actions/movie";
import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";

import "./style.scss";

const MovieUpComing = () => {
  const dispatch = useDispatch();
  const { movieUpcoming } = useSelector((state) => state.movies);

  React.useEffect(() => {
    const params = {};

    dispatch(fetchMovieUpComing({ params }));
  }, [dispatch]);

  return (
    <Layout>
      <div className="bg-gray-900">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {movieUpcoming?.results?.slice(0, 8).map((item) => {
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
export default MovieUpComing;
