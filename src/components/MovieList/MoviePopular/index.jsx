import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMoviePopular } from "../../../store/actions/movie";

import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";

import { OutlineButton } from "../../Button";

import "./style.scss";

const MoviePopular = () => {
  const dispatch = useDispatch();
  const { moviePopular } = useSelector((state) => state.movies);

  const [movies, setMovies] = React.useState([]);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    const params = {};
    dispatch(fetchMoviePopular({ params }));
  }, [dispatch]);

  React.useEffect(() => {
    setMovies(moviePopular.results);
    setTotalPages(moviePopular.total_pages);
  }, [moviePopular]);

  const loadMore = () => {
    const params = { page: page + 1 };
    dispatch(fetchMoviePopular({ params }));

    setMovies([...movies, ...moviePopular.results]);
    setPage(page + 1);
  };

  const renderHTML = () => {
    return movies?.slice(0, 8).map((item, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <MovieItem movieItem={item} />
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <div className="movies-movies">
        <Container maxWidth="lg">
          {page < totalPages ? (
            <div className="btn-loadmore">
              <OutlineButton onClick={loadMore}>View More</OutlineButton>
            </div>
          ) : null}
          <Grid container spacing={3}>
            {renderHTML()}
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};
export default MoviePopular;
