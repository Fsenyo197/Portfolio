import React from "react";
import "./Components/index.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path= "*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);
}

export default App;
