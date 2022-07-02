import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMoviePopular } from "../../../store/actions/movie";

import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";

import "./style.scss";

const MoviePopular = () => {
  const dispatch = useDispatch();
  const { moviePopular } = useSelector((state) => state.movies);

  React.useEffect(() => {
    const params = { page: 1 };
    dispatch(fetchMoviePopular({ params }));
  }, [dispatch]);

  // if (loading) return <div>loading...</div>;

  const renderHTML = () => {
    return moviePopular?.results?.slice(0, 8).map((item) => {
      return (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <MovieItem movieItem={item} />
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <div className="bg-gray-900">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {renderHTML()}
          </Grid>
          {/* page */}
        </Container>
      </div>
    </Layout>
  );
};
export default MoviePopular;
