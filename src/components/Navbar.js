import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LuFlaskConical } from "react-icons/lu";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { 
    clicked: false,
    serviceClicked: false // State to track if the "Service" submenu is clicked
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleServiceClick = () => {
    this.setState({ serviceClicked: !this.state.serviceClicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          Comic-con<LuFlaskConical style={{ color: "black" }} />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  {/* Toggle serviceClicked state when clicking on "Service" */}
                  <div onClick={this.handleServiceClick}>
                    <Link to={item.url} className={item.cName} target={item.target}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </div>
                  {/* Render submenu only if serviceClicked state is true */}
                  {this.state.serviceClicked && (
                    <ul className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.url} className={subItem.cName} target={subItem.target}>
                            <i className={subItem.icon}></i>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={item.url} className={item.cName} target={item.target}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
