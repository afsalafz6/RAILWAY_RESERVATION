import React, { Component } from "react";
import BookingService from "../../../Services/BookingService";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

class BookingDetails extends Component {
  state = {
    bookings: [],
  };
  componentDidMount() {
    BookingService.getAllBooking().then((res) => {
      console.log("all booking", res);
      this.setState({ bookings: res.data });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Sidebar />

        {/* <div className="container"> */}
          {/* <div className="section"> */}
            {/* <div className="row"> */}
              <div className="col s12 center">
                <h4 className="left-align">Booking Details</h4>

                <div className="left-align light">
                  <table className="centered striped">
                    <thead>
                      <tr>
                        <th>Booking by</th>
                        <th>Train Id</th>
                        <th>Departure Station</th>
                        <th>Arrival Station</th>
                        <th>Quota</th>
                        <th>no. of Seats</th>
                        <th>Total Fare</th>
                        <th>Pay OrderId</th>
                        <th>Payment Status</th>
                        <th>Cancel Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.bookings.length === 0 ? (
                        <tr align="center">
                          <td colSpan="8">
                            <h3>OOPS! No Bookings Available!</h3>
                          </td>
                        </tr>
                      ) : (
                        this.state.bookings.map((book) => (
                          <tr key={book.id}>
                            <td>{book.booked_by}</td>
                            <td>{book.train_id}</td>
                            <td>{book.depart}</td>
                            <td>{book.arrival}</td>
                            <td>{book.quota}</td>
                            <td>{book.quantity}</td>
                            <td>{book.totalfare}</td>
                            

                            {book.payOrderId ? (
                              <td>{book.payOrderId}</td>
                            ) : (
                              <td>NILL</td>
                            )}

                            {book.payment_status ? (
                              <td>
                                <span className="badge blue">paid</span>
                              </td>
                            ) : (
                              <td>
                                <span className="badge red">not paid</span>
                              </td>
                            )}

                            {book.cancel_status ? (
                              <td>
                                <span className="badge red">cancelled</span>
                              </td>
                            ) : (
                              <td>
                                <span className="badge blue">not Cancelled</span>
                              </td>
                            )}

                            <td>
                              <a
                                href="#c"
                                className="material-icons"
                              >
                                close
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default BookingDetails;
