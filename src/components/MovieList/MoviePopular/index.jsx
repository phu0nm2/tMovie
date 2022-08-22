import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid } from "@material-ui/core";

import { fetchMoviePopular } from "../../../store/actions/movie";

import MovieItem from "../../MovieItem";
import Layout from "../../../HOCs/Layout";
import Pagination from "../../Pagination";

import { Button } from "antd";
import { OutlineButton } from "../../Button";

import "./style.scss";

const MoviePopular = () => {
  const dispatch = useDispatch();
  const { moviePopular } = useSelector((state) => state.movies);

  const [movies, setMovies] = React.useState([moviePopular]);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    const params = {};
    dispatch(fetchMoviePopular({ params }));

    setMovies(moviePopular.results);
    setTotalPages(moviePopular.total_pages);
  }, [dispatch, moviePopular.total_pages]);

  const loadMore = () => {
    // bị render 2 lần page 1
    const params = { page: page + 1 };
    dispatch(fetchMoviePopular({ params }));

    setMovies([...movies, ...moviePopular.results]);
    setPage(page + 1);
  };

  const renderHTML = () => {
    return movies?.map((item, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={3}>
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
          {page < totalPages ? (
            <div className="btn-loadmore">
              <OutlineButton onClick={loadMore}>Load More</OutlineButton>
            </div>
          ) : null}
        </Container>
      </div>
    </Layout>
  );
};
export default MoviePopular;
