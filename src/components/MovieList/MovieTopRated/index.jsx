import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMovieTopRated } from "../../../store/actions/movie";

import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";

import "./style.scss";
import { OutlineButton } from "../../Button";

const MovieTopRated = () => {
  const dispatch = useDispatch();
  const { movieTopRated } = useSelector((state) => state.movies);

  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    const params = {};
    dispatch(fetchMovieTopRated({ params }));
  }, [dispatch]);

  React.useEffect(() => {
    setMovies(movieTopRated.results);
    setTotalPages(movieTopRated.total_pages);
  }, [movieTopRated]);

  const loadMore = () => {
    const params = { page: page + 1 };
    dispatch(fetchMovieTopRated({ params }));

    setMovies([...movies, ...movieTopRated.results]);
    setPage(page + 1);
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
            {movieTopRated?.results?.slice(0, 8).map((item) => {
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
