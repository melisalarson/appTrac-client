import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

function NavBar() {
  return (
    <nav>
      <div className="container">
        <NavLink className="logo" to="/">
          <h1>appTrac</h1>
        </NavLink>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/applicationstatus">
              AppStat
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/applicationdetails">
              AppDeets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Logout">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
