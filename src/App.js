import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Blog from "./components/blog";
import ComicBites from "./components/comicbites";
import ComicGPT from "./components/comicgpt";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/comicbites" element={<ComicBites />} />
          <Route path="/comicGPT" element={<ComicGPT/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
