import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MovieList from "../../components/MovieList";
import TvList from "../../components/TvList";

import Layout from "../../HOCs/Layout";

import "./style.scss";

const Home = () => {
  return (
    <>
      {/* <Layout> */}
      <Header></Header>

      <MovieList></MovieList>

      {/* <div className="home__tv">
        <h2 className="home__tv-title">TV</h2>
        <MovieList category={category.tv} type={tvType.popular}></MovieList>
      </div>  */}

      {/* </Layout> */}
      {/* <Modal></Modal> */}

      <Footer></Footer>
    </>
  );
};

export default Home;
