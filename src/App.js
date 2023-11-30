import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Blog from "./components/blog";
import Service from "./components/service";

// import WaterMap from "./components/waterMap"; // Import the WaterMap component

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
          <Route path="/service" element={<Service/>} />
          {/* <Route
            path="/"
            element={
              <div>
               
                <Home />
              </div>
            }
          /> */}
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}
