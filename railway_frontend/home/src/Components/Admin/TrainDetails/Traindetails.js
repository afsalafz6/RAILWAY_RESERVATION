import React, { Component } from "react";
import { Link } from "react-router-dom";
import TrainService from "../../../Services/TrainService";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";

class Traindetails extends Component {
  state = {
    trains: [],
  };
  componentDidMount() {
    TrainService.getAllTrain().then((res) => {
      console.log("all train", res);
      this.setState({ trains: res.data });
    });
  }

  deleteTrain(e) {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    // if (confirm("Press a button!")) {}
    TrainService.deleteTrain(id).then((res) => {
      console.log("delete train RES", res);
      alert(res.data);
      window.location.reload();
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
                  Train Details{"    "}
                  <Link
                    to="/createtrain"
                    className="btn modal-trigger right-align"
                  >
                    +
                  </Link>
                </h4>

                <div className="left-align light">
                  <table className="striped">
                    <thead>
                      <tr>
                        {/* <th>ID</th> */}
                        <th>Train Id</th>
                        <th>Train Name</th>
                        <th>Departure Station</th>
                        <th>Arrival Station</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>General Fare</th>
                        <th>Ladies Fare</th>
                        <th>Total Seats</th>
                        <th>Seats Left</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.trains.length === 0 ? (
                        <tr align="center">
                          <td colSpan="8">
                            <h3>OOPS! No Trains Available!</h3>
                          </td>
                        </tr>
                      ) : (
                        this.state.trains.map((train) => (
                          <tr key={train.id}>
                            {/* <td>{train.id}</td> */}
                            <td>{train.train_id}</td>
                            <td>{train.train_name}</td>
                            <td>{train.departure_station}</td>
                            <td>{train.arrival_station}</td>
                            <td>{train.departure_time}</td>
                            <td>{train.arrival_time}</td>
                            <td>{train.general_fare}</td>
                            <td>{train.ladies_fare}</td>
                            <td>{train.total_seats}</td>
                            <td>{train.seats_left}</td>

                            {train.status ? (
                              <td>
                                <span className="badge blue">
                                  active
                                </span>
                              </td>
                            ) : (
                              <td>
                                <span className="badge red">
                                  inactive
                                </span>
                              </td>
                            )}

                            <td>
                              {/* <a href={"/createtrain/"+train.id} className="material-icons">create</a> */}
                              <Link
                                to={"/createtrain/" + train.id}
                                className="material-icons"
                              >
                                create
                              </Link>
                              <a
                                href="/#"
                                className="material-icons"
                                onClick={this.deleteTrain}
                                id={train.id}
                              >
                                delete
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Traindetails;
