import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Documentation from "./Components/Documentation"
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Documentation" element={<Documentation />} />
      </Routes>
    </>
  );
}

export default App;

