import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import MovieList from "../../components/MovieList";
import TvList from "../../components/TvList";
import { category, movieType, tvType } from "../../api/tmdbApi";

import "./style.scss";
import Layout from "../../HOCs/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Header></Header>
        <div className="home__movie">
          <h2 className="home__movie-title">Movie</h2>
          <MovieList
            category={category.movie}
            type={movieType.popular}
          ></MovieList>
        </div>

        <div className="home__tv">
          <h2 className="home__tv-title">TV</h2>
          <TvList category={category.tv} type={tvType.popular}></TvList>
        </div>
      </Layout>
      {/* <Modal></Modal> */}

      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
