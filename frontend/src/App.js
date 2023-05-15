import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Draft from "./components/Draft";
import Tierlist from "./components/Tierlist";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Draft />} />
        <Route path="/tierlist" element={<Tierlist />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
