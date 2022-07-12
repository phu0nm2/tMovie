import React from "react";
import { useSelector } from "react-redux";

import MovieItem from "../MovieItem";
import NotFound from "../NotFound";
import Layout from "../../HOCs/Layout";
import "./styles.scss";

const SearchMovies = () => {
  const { loading, searchMovies } = useSelector((state) => state.movies);

  return (
    <>
      <Layout loading={loading}>
        <div className="bg-gray-900 search__movies container">
          {!!searchMovies && searchMovies.length > 0 ? (
            searchMovies?.map((item) => (
              <MovieItem movieItem={item} key={item.id}></MovieItem>
            ))
          ) : (
            <NotFound></NotFound>
          )}
        </div>
      </Layout>
    </>
  );
};

export default SearchMovies;
