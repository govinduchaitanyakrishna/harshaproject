import React from "react";
import Navbar from "./Navbar"; // Assuming your Navbar component is in the same directory
import "./contact.css"; // Import a CSS file for styling

export default function Contact() {
  return (
    <div className="contact-container">
      <Navbar /> {/* Place Navbar component first */}
      <div className="contact-content">
        <h1>This is Contact Page</h1>
      </div>
    </div>
  );
}
