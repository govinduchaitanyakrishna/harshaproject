import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          WaterMap <i className="fa-solid fa-droplet"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.cName} target={item.target}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;
