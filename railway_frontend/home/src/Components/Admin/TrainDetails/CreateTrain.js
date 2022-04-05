import React, { Component } from "react";
import TrainService from "../../../Services/TrainService";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

class CreateTrain extends Component {
  state = {
    id: this.props.match.params.trainid,
    train_id: "",
    train_name: "",
    departure_station: "",
    arrival_station: "",
    departure_time: 0,
    arrival_time: 0,
    general_fare: 0,
    ladies_fare: 0,
    total_seats: 0,
    seats_left: 0,
    status: true,
    // isCreated: true
    // quota: "general",
  };

  componentDidMount() {
    console.log("iddd", this.state.id);
    if (this.state.id) {
      this.editTrain(this.state.id);
    }
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let trainDetails = this.state;
    console.log("submitted", trainDetails);
    console.log("trainDetails => " + JSON.stringify(trainDetails));
    if (!this.state.id) {
      console.log("INSIDE CREATE TRAIN");
    TrainService.trainCreate(trainDetails).then((res) => {
      // this.props.history.push('/train');
      console.log("Create res", res);
      alert(res.data);
      this.props.history.push("/traindetails");
    });
  } else {
    console.log("INSIDE UPDATE TRAIN");
    TrainService.trainUpdate(trainDetails,this.state.id).then((res) => {
      // this.props.history.push('/train');
      console.log("Update res", res);
      alert(res.data);
      this.props.history.push("/traindetails");
    });
  }
  };

  editTrain(id) {
    TrainService.getTrainById(id).then((res) => {
      console.log("edit train RES", res);
      this.setState({
        train_id: res.data.train_id,
        train_name: res.data.train_name,
        departure_station: res.data.departure_station,
        arrival_station: res.data.arrival_station,
        departure_time: res.data.departure_time,
        arrival_time: res.data.arrival_time,
        general_fare: res.data.general_fare,
        ladies_fare: res.data.ladies_fare,
        total_seats: res.data.total_seats,
        seats_left: res.data.seats_left,
        status: res.data.status
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Sidebar />

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h4 className="left-align">
                  Create Train{" "}
                  <a
                    href="/traindetails"
                    className="btn modal-trigger right-align"
                  >
                    List Train
                  </a>
                </h4>
                <div className="left-align light">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                      <span htmlFor="TrainId" className="teal-text helper-text">Train Id</span>
                        <input
                          id="TrainId"
                          type="text"
                          className="validate"
                          name="train_id"
                          value={this.state.train_id}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="TrainId">Train Id</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="TrainName" className="teal-text helper-text">Train Name</span>
                        <input
                          id="TrainName"
                          type="text"
                          className="validate"
                          name="train_name"
                          value={this.state.train_name}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="TrainName">Train Name</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="DepartStn" className="teal-text helper-text">Departure Station</span>
                        <input
                          id="DepartStn"
                          type="text"
                          className="validate"
                          name="departure_station"
                          value={this.state.departure_station}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="DepartStn">Departure Station</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="ArrivlStn" className="teal-text helper-text">Arrival Station</span>
                        <input
                          id="ArrivlStn"
                          type="text"
                          className="validate"
                          name="arrival_station"
                          value={this.state.arrival_station}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="ArrivlStn">Arrival Station</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="DepartTime" className="teal-text helper-text">Departure Time</span>
                        <input
                          id="DepartTime"
                          type="time"
                          className="validate"
                          name="departure_time"
                          value={this.state.departure_time}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="DepartTime">Departure Time</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="ArrivlTime" className="teal-text helper-text">Arrival Time</span>
                        <input
                          id="ArrivlTime"
                          type="time"
                          className="validate"
                          name="arrival_time"
                          value={this.state.arrival_time}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="ArrivlTime">Arrival Time</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="GnrlFare" className="teal-text helper-text">General Fare</span>
                        <input
                          id="GnrlFare"
                          type="number"
                          className="validate"
                          name="general_fare"
                          value={this.state.general_fare}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="GnrlFare">General Fare</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="LdsFare" className="teal-text helper-text">Ladies Fare</span>
                        <input
                          id="LdsFare"
                          type="number"
                          className="validate"
                          name="ladies_fare"
                          value={this.state.ladies_fare}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="LdsFare">Ladies Fare</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="TtlSeats" className="teal-text helper-text">Total Seats</span>
                        <input
                          id="TtlSeats"
                          type="number"
                          className="validate"
                          name="total_seats"
                          value={this.state.total_seats}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="TtlSeats">Total Seats</label> */}
                      </div>
                      <div className="input-field col s4">
                      <span htmlFor="SeatsLft" className="teal-text helper-text">Seats Left</span>
                        <input
                          id="SeatsLft"
                          type="number"
                          className="validate"
                          name="seats_left"
                          value={this.state.seats_left}
                          onChange={this.onHandleChange}
                        />
                        {/* <label htmlFor="SeatsLft">Seats Left</label> */}
                      </div>
                      <div className="input-field col s4">
                        <label>
                          <input
                            type="checkbox"
                            className="filled-in"
                            name="status"
                            defaultChecked
                            value="false"
                            onChange={this.onHandleChange}
                          />
                          <span>Status</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                          onClick={this.onSubmit}
                        >
                          Submit
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

export default CreateTrain;
