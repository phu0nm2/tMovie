import "./App.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import RoutesConfig from "./RoutesConfig";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import LogIn from "./components/Login";
// import Catalog from "./Pages/Catalog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/:category" element={<Catalog />} /> */}
        {/* <Route path="/:category/search/:keyword" element={<Catalog />} /> */}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
