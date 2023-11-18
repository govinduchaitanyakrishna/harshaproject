import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import WaterMap from "./components/waterMap"; // Import the WaterMap component

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/watermap" element={<WaterMap />} /> */}
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
