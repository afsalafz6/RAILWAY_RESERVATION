import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{ backgroundColor: "#26a69a"}}>
            <a href="/" className="brand-logo">
            <i className="material-icons circle white small">train</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              {/* <li>
                <Link to="/dashboard">DashboardTest</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
