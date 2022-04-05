import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookingService from "../../../Services/BookingService";
import UserNav from "../UserNav/UserNav";
import UserSidebar from "../UserSidebar/UserSidebar";

class UserDashboard extends Component {
  state = {
    bookings: [],
    cancelledBooking: [],
    pendingBooking: [],
  };
  componentDidMount() {
    if (localStorage.getItem("id")) {
      var userid = localStorage.getItem("id");
      userid = userid.replace(/^"|"$/g, "");

      BookingService.getAllBookingbyUser(userid).then((res) => {
        this.setState({ bookings: res.data });
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].cancel_status === true) {
            this.setState({
              cancelledBooking: [...this.state.cancelledBooking, res.data[i]],
            });
          }
          if (res.data[i].payment_status === false) {
            this.setState({
              pendingBooking: [...this.state.pendingBooking, res.data[i]],
            });
          }
        }
      });
    }
  }
  render() {
    return (
      <div>
        <UserNav />
        <UserSidebar />
        <div className="page-footer teal">
          <div className="container">
            <h3 className="card-title">MY DASHBOARD</h3>
            <form>
              <div className="row card">
                <h5 className="card-title teal-text">Search your Train</h5>
                <div className="input-field col s12 m5">
                  <i className="material-icons prefix teal-text">start</i>
                  <input
                    type="text"
                    id="from-input"
                    name="from"
                    className="autocomplete"
                    // value={this.state.from}
                    // onChange={this.onHandleChange}
                  />
                  <label htmlFor="from-input">
                    from
                  </label>
                </div>
                <div className="input-field col s12 m5">
                  <i className="material-icons prefix teal-text">stop</i>
                  <input
                    type="text"
                    id="to-input"
                    name="to"
                    className="autocomplete"
                    // value={this.state.to}
                    // onChange={this.onHandleChange}
                  />
                  <label htmlFor="to-input">
                    to
                  </label>
                </div>
                <div className="input-field col s12 m2">
                  <Link
                    className="waves-effect waves-light btn teal white-text"
                    to={"/alltrain"}
                  >
                    <i className="material-icons right">search</i>Search
                  </Link>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">My Bookings</span>
                      <p>{this.state.bookings.length}</p>
                    </div>
                    <div className="card-action">
                      <Link to="/bookings">View</Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">Cancelled Bookings</span>
                        <p>{this.state.cancelledBooking.length}</p>
                      </div>
                      <div className="card-action">
                        <Link to="/bookings">View</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">Pending Bookings</span>
                        <p>{this.state.pendingBooking.length}</p>
                      </div>
                      <div className="card-action">
                        <Link to="/bookings">View</Link>
                      </div>
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

export default UserDashboard;
