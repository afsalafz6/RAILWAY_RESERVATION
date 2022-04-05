import React, { Component } from "react";
import UserService from "../../../Services/UserService";

class UserSidebar extends Component {
  state = {
    username: "",
    email: ""
  };
  componentDidMount() {
    if(localStorage.getItem('id')){
    var userid = localStorage.getItem('id');
    userid = userid.replace(/^"|"$/g, '');

    UserService.getUserById(userid).then((res) => {
      this.setState({ user: res.data });
      this.setState({
        username:  res.data.username,
        email: res.data.email
      });
    });
  }
  }
  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/sidebar.jpg" alt="ssss" />
              </div>
              <a href="/profile">
                <img className="circle" src="images/profile.jpg" alt="profile" />
              </a>
              <a href="#name">
                <span className="white-text name">{this.state.username}</span>
              </a>
              <a href="#email">
                <span className="white-text email">{this.state.email}</span>
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
            <a className="waves-effect" href="/usrdash">
              Dashboard
            </a>
            <a className="waves-effect" href="/profile">
              Profile
            </a>
            <a className="waves-effect" href="/alltrain">
              All Train
            </a>
            <a className="waves-effect" href="/bookings">
              Bookings
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

export default UserSidebar;
