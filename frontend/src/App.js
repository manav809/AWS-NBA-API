import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from "./Components/Home";
import InvalidURL from "./Components/InvalidURL";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="*" element={<InvalidURL />} />
      </Routes>
    </>
  );
}

export default App;

