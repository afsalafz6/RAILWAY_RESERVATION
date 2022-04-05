import React, { Component } from "react";

class Nav extends Component {
  logout(e) {
    e.preventDefault();
    if (window.confirm("Are You Sure Want to Logout of this Session!")) {
      localStorage.removeItem("admin");
      localStorage.removeItem("id");
      window.location.href ="/"
    } else {
      alert("logging out cancelled !!!");
    }
  }
  render() {
    let url="";
    return (
      <div>
        <nav style={{ backgroundColor: "#26a69a" }}>
          <ul>
            <li data-target="slide-out" className="sidenav-trigger">
              <a href={url}>
                <i className="material-icons">menu</i>
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <button className="waves-effect waves-light btn white red-text" onClick={this.logout}><i className="material-icons right">logout</i>Logout</button>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
