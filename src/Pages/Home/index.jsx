import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MovieList from "../../components/MovieList";
// import TvList from "../../components/TvList";

import Layout from "../../HOCs/Layout";

import "./style.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const { loading } = useSelector((state) => state.movies);

  return (
    <>
      <Layout loading={loading}>
        <MovieList></MovieList>

        {/* <SearchMovies></SearchMovies> */}

        {/* <div className="home__tv">
        <h2 className="home__tv-title">TV</h2>
        <MovieList category={category.tv} type={tvType.popular}></MovieList>
      </div>  */}

        {/* <Modal></Modal> */}

        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Home;
