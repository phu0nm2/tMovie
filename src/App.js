import "./App.scss";

import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import SignIn from "../src/Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SearchMovies from "./components/SearchMovies";

import { fetchRequestToken } from "../src/store/actions/user";

import { useDispatch } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();
  // const { params } = useParams();
  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!!token) dispatch(fetchRequestToken(params));
  // }, [dispatch, params]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/movie/:id" element={<Detail />} />

        <Route path="/search" element={<SearchMovies />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
