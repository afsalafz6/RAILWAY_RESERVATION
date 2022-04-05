import React, { Component } from "react";
import BookingService from "../../../Services/BookingService";
import UserNav from "../UserNav/UserNav";
import UserSidebar from "../UserSidebar/UserSidebar";
import "./bookings.css";

class bookings extends Component {
  state = {
    bookings: [],
  };
  componentDidMount() {
    if (localStorage.getItem("id")) {
      var userid = localStorage.getItem("id");
      userid = userid.replace(/^"|"$/g, "");

      BookingService.getAllBookingbyUser(userid).then((res) => {
        console.log("all bookings", res);
        this.setState({ bookings: res.data });
      });
    }
  }

  onCancel = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    console.log("book iddd", id);
    if (window.confirm("Are You Sure Want to Cancel this Booking ?")) {
      BookingService.cancelBooking(id);
      alert(
        "Your Booking is Cancelled !!! Payment will return in 3 Working days !!!"
      );
      window.location.reload();
    } else {
      alert("Booking not Cancelled");
    }
  };

  render() {
    return (
      <div>
        <UserNav />
        <UserSidebar />
        <div className="container">
          {/* <h4 className="left-align">Bookings</h4>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab">
                <a href="#success">Success</a>
              </li>
              <li className="tab">
                <a className="active" href="#cancelled">
                  Cancelled
                </a>
              </li>
              <li className="tab">
                <a href="#failed">Failed</a>
              </li>
            </ul>
          </div> */}
          <h4 className="left-align">My Bookings</h4>
          {/* ###############card start###################################### */}
          {this.state.bookings.length === 0 ? (
            <tr align="center">
              <td colSpan="8">
                <h3>OOPS! No Bookings Available!</h3>
              </td>
            </tr>
          ) : (
            this.state.bookings.map((bookingss) => (
              <div className="card teal" key={bookingss.id}>
                <h3 className="subheader white-text">
                  Booking Id : {bookingss.id} <br />
                  Order Id : {bookingss.payOrderId}
                </h3>
                <ul className="list">
                  <li className="waves-effectt">
                    <div className="valign-wrapper">
                      <i className="material-icons left circle white">train</i>
                      <div className="title white-text">
                        {bookingss.depart}{" "}
                        <i className="material-icons white-text">
                          trending_flat
                        </i>{" "}
                        {bookingss.arrival}
                        <br />
                        <br />
                        <span className="white-text">
                          {bookingss.depart_time} to {bookingss.arrival_time}
                        </span>
                        <br />
                        {bookingss.payment_status ? (
                          <span className="white-text">Payment : PAID</span>
                        ) : (
                          <span className="red-text">Payment: FAILED</span>
                        )}
                      </div>
                      <div className="title align-right">
                        <br />
                        <br />
                        <span className="white-text">
                          Quantity: {bookingss.quantity}
                        </span>
                        <br />
                        <span className="white-text">
                          Total Fare: $ {bookingss.totalfare}
                        </span>
                      </div>
                      {bookingss.cancel_status ? (
                        <button className="ml-auto red white-text" disabled>
                          CANCELLED
                        </button>
                      ) : (
                        <i
                          className="small material-icons ml-auto red-text"
                          id={bookingss.id}
                          onClick={this.onCancel}
                        >
                          cancel
                        </i>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default bookings;
