import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import AllProblems from "./pages/AllProblems"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/problems" element={<AllProblems/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
