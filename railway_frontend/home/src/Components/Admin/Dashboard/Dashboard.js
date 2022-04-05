import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookingService from "../../../Services/BookingService";
import TrainService from "../../../Services/TrainService";
import UserService from "../../../Services/UserService";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

class Dashboard extends Component {
  state = {
    trains: [],
    users: [],
    bookings: [],
  };
  componentDidMount() {
    TrainService.getAllTrain().then((res) => {
      this.setState({ trains: res.data });
    });
    UserService.getAllUser().then((res) => {
      this.setState({ users: res.data });
    });
    BookingService.getAllBooking().then((res) => {
      this.setState({ bookings: res.data });
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <Sidebar />
        <div className="page-footer teal">
          <div className="container">
            <h3 className="card-title">ADMIN DASHBOARD</h3>
            <div className="row">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Users Count</span>
                      <p>{this.state.users.length}</p>
                    </div>
                    <div className="card-action">
                      <Link to="/userdetails">View</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Trains Count</span>
                      <p>{this.state.trains.length}</p>
                    </div>
                    <div className="card-action">
                      <Link to="/traindetails">View</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Booking Count</span>
                      <p>{this.state.bookings.length}</p>
                    </div>
                    <div className="card-action">
                      <a href="/allbooking">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
