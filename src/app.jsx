import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overvieuw";
import PokemonDetails from "./pages/pokemon-details";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Overview />} />
      <Route path="/:pokemon" element={<PokemonDetails />} />
    </Routes>
  );
}
