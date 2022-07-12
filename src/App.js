import "./App.scss";

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import SignIn from "../src/Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SearchMovies from "./components/SearchMovies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/authenticate" element={<SignIn />} /> */}
        <Route path="/signup" element={<SignUp />} />

        <Route path="/movie/:id" element={<Detail />} />

        <Route path="/search" element={<SearchMovies />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
