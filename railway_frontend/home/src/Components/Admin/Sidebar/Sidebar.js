import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/sidebar.jpg" alt="ssss" />
              </div>
              <a href="#user">
                <img className="circle" src="images/profile.jpg" alt="ddd" />
              </a>
              <a href="#name">
                <span className="white-text name">Admin</span>
              </a>
              <a href="#email">
                <span className="white-text email">admin@rail.com</span>
              </a>
            </div>
          </li>

          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a href="#!" className="subheader">
              Menu
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/">
              Home
            </a>
            <a className="waves-effect" href="/dashboard">
              Dashboard
            </a>
            <a className="waves-effect" href="/traindetails">
              Train Details
            </a>
            <a className="waves-effect" href="/userdetails">
              User Details
            </a>
            <a className="waves-effect" href="/allbooking">
              Booking Details
            </a>
          </li>
        </ul>
        {/* <a href="/sidebar" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a> */}
      </div>
    );
  }
}

export default Sidebar;
