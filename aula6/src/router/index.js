import React from "react";
import { Routes, Route } from "react-router-dom";

import Details from "../page/details";
import Filmes from "../page/filmes";
import Home from "../page/home";

function RouterNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="filmes" element={<Filmes />} />
      <Route path="details/:id" element={<Details />} />
    </Routes>
  );
}

export default RouterNavigation;
