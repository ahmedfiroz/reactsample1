import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <NavLink className="navbar-brand" to="#">
          MySchool
          </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/Signin"
              >
                SignIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/About"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
