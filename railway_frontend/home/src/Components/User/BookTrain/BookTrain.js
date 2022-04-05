import React, { Component } from "react";
import UserNav from "../UserNav/UserNav";
import UserSidebar from "../UserSidebar/UserSidebar";
import TrainService from "../../../Services/TrainService";
import BookingService from "../../../Services/BookingService";

class BookTrain extends Component {
  state = {
    // train_id: this.props.match.params.trainid,
    train: {},
    // totalfare: 0,
    // quantity: "",
    // quota: 'general',
    // booked_by: "",
    // payment_status: false,
    // cancel_status: false
    train_id: this.props.match.params.trainid,
    totalfare: 0,
    quantity: 1,
    quota: "general",
    booked_by: "",
    payment_status: false,
    cancel_status: false,
    depart: "",
		arrival: "",
		depart_time: "",
		arrival_time: "",
  };

  componentDidMount() {
    if (localStorage.getItem("id")) {
      var userid = localStorage.getItem("id");
      userid = userid.replace(/^"|"$/g, "");
      this.setState({ booked_by: userid });
    }

    TrainService.getTrainById(this.state.train_id).then((res) => {
      console.log("train details", res);
      this.setState({ train: res.data });
      this.setState({ 
        totalfare: this.state.train.general_fare
      });
    });
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      totalfare: 100,
    });
    if (event.target.name === "quota") {
        console.log(this.state.quantity);

      if (event.target.value === "general") {
        this.setState({
          totalfare: this.state.train.general_fare * this.state.quantity
        });
      } else {
        this.setState({
          totalfare: this.state.train.ladies_fare * this.state.quantity
        });
      }
    } else {
      console.log(this.state.quota);
      console.log(event.target.value);
      if (this.state.quota === "general") {
        this.setState({
          totalfare: this.state.train.general_fare * event.target.value
        });
      } else {
        this.setState({
          totalfare: this.state.train.ladies_fare * event.target.value
        });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    // let bookDetails = this.state;
    let bookingDetails = {
      train_id: this.state.train_id,
      totalfare: this.state.totalfare,
      quantity: this.state.quantity,
      quota: this.state.quota,
      booked_by: this.state.booked_by,
      payment_status: this.state.payment_status,
      cancel_status: this.state.cancel_status,
      depart: this.state.train.departure_station,
      arrival: this.state.train.arrival_station,
      depart_time: this.state.train.departure_time,
      arrival_time: this.state.train.arrival_time,
    };
    console.log("bookDetails => " + bookingDetails);
    console.log("bookDetails => " + JSON.stringify(bookingDetails));
    console.log("INSIDE BOOK TRAIN");
    BookingService.createBooking(bookingDetails).then((res) => {
      console.log("Booking res", res);
      alert(res.data.response);
      this.props.history.push("/pay/"+res.data.bookingId );
    });
  };
  render() {
    return (
      <div>
        <UserNav />
        <UserSidebar />
        <div className="container">
          <div className="section">
            <div className="card teal">
              <h3 className="subheader white-text">
                {this.state.train.train_id} {this.state.train.train_name} Exp
                Runs on: S M T W T F S Mail/Express
              </h3>
              <ul className="list">
                <li className="waves-effectt">
                  <div className="valign-wrapper">
                    <i className="material-icons left circle white">train</i>
                    <div className="title white-text">
                      {this.state.train.departure_station}{" "}
                      <i className="material-icons white-text">trending_flat</i>{" "}
                      {this.state.train.arrival_station}
                      <br />
                      <br />
                      <span className="white-text">
                        {this.state.train.departure_time} to{" "}
                        {this.state.train.arrival_time}
                      </span>
                      <br />
                      {/* <span className="white-text">
                      {" "}
                      {this.state.departuredate}
                    </span> */}
                    </div>
                    <div className="title align-right">
                      <br />
                      <br />
                      <span className="white-text">
                        General Fare: ₹ {this.state.train.general_fare}
                      </span>
                      <br />
                      <span className="white-text">
                        Ladies Fare: ₹ {this.state.train.ladies_fare}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col s12 center">
                <h4 className="left-align">Book Your Train</h4>
                <div className="left-align light">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <span className="teal-text helper-text">Quota</span>
                        <p>
                          <label>
                            <input
                              id="quota"
                              name="quota"
                              type="radio"
                              value="general"
                              onChange={this.onHandleChange}
                              defaultChecked
                            />
                            <span>General</span>
                          </label>
                          <label>
                            <input
                              name="quota"
                              type="radio"
                              value="ladies"
                              onChange={this.onHandleChange}
                            />
                            <span>Ladies</span>
                          </label>
                        </p>
                      </div>

                      <div className="input-field col s12">
                        <span
                          htmlFor="quantity"
                          className="teal-text helper-text"
                        >
                          Quantity
                        </span>
                        <input
                          id="quantity"
                          type="number"
                          className="validate"
                          name="quantity"
                          min={1}
                          max={6}
                          value={this.state.quantity}
                          onChange={this.onHandleChange}
                        />
                        <span className="black-text helper-text">
                          only 6 per one booking
                        </span>
                      </div>

                      <div className="input-field col s12">
                        <span className="teal-text helper-text">
                          Amount to be paid
                        </span>
                        ₹ {this.state.totalfare}
                      </div>

                      <div className="input-field col s12">
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                          onClick={this.onSubmit}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookTrain;
