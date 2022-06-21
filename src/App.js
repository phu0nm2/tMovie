import "./App.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import RoutesConfig from "./RoutesConfig";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Catalog from "./Pages/Catalog";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
