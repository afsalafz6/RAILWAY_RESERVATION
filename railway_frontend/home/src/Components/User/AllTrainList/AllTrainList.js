import React, { Component } from "react";
import { Link } from "react-router-dom";
import TrainService from "../../../Services/TrainService";
import UserNav from "../UserNav/UserNav";
import UserSidebar from "../UserSidebar/UserSidebar";
import "./AllTrainList.css";

class AllTrainList extends Component {
  state = {
    departuredate: "",
    trains: [],
    from:"",
    to:""
  };
  componentDidMount() {
    this.setDate();
    TrainService.getAllTrain().then((res) => {
      console.log("all train", res);
      this.setState({ trains: res.data });
    });
    
  }
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSearch = (e) => {
    e.preventDefault();
    let searchData = {"from":this.state.from, "to":this.state.to}
        console.log("submitted", searchData);
        TrainService.searchTrain(searchData.from,searchData.to).then((res) => {
          console.log("res", res);
          this.setState({ trains: res.data, from:"", to:""});
        });

  }
  onLoad = (e) => {
    window.location.reload();
  }
  setDate() {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("date ", date);
    this.setState({ departuredate: date });
  }
  render() {
    return (
      <div>
        <UserNav />
        <UserSidebar />
        <div className="container">
          <h4 className="left-align">All Trains</h4>

          <form>
          <div className="row">
            <div className="input-field col s12 m5">
              <i className="material-icons prefix">start</i>
              <input type="text" id="from-input" name="from" className="autocomplete" value={this.state.from}
                          onChange={this.onHandleChange}/>
              <label htmlFor="from-input">from</label>
            </div>
            <div className="input-field col s12 m5">
              <i className="material-icons prefix">stop</i>
              <input type="text" id="to-input" name="to" className="autocomplete" value={this.state.to}
                          onChange={this.onHandleChange} />
              <label htmlFor="to-input">to</label>
            </div>
            <div className="input-field col s12 m2">
              <button className="waves-effect waves-light btn teal white-text" onClick={this.onSearch}>
                <i className="material-icons right">search</i>Search
              </button>{"  "}<i className="material-icons prefix" onClick={this.onLoad}>refresh</i>
            </div>
          </div>
          </form>

          {/* <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input type="text" id="search-input" className="autocomplete" />
            <label htmlFor="search-input">search your ride</label>
          </div> */}

          {/* ###############card start###################################### */}
          {/* <div className="card teal">
            <h3 className="subheader white-text">
              22637 West Coast Exp Runs on: S M T W T F S Mail/Express
            </h3>
            <ul className="list">
              <li className="waves-effectt">
                <div className="valign-wrapper">
                  <i className="material-icons left circle white">train</i>
                  <div className="title white-text">
                    DELHI{" "}
                    <i className="material-icons white-text">trending_flat</i>{" "}
                    THALASSERY
                    <br />
                    <br />
                    <span className="white-text">03:00 to 09:00</span>
                    <br />
                    <span className="white-text">
                      {" "}
                      {this.state.departuredate}
                    </span>
                  </div>
                  <div className="title align-right">
                    <br />
                    <br />
                    <span className="white-text">
                      General Fare: $ 455 {this.state.date}
                    </span>
                    <br />
                    <span className="white-text">Ladies Fare: $ 455</span>
                  </div>
                  <i className="medium material-icons ml-auto white-text">
                    send
                  </i>
                </div>
              </li>
            </ul>
          </div> */}
          {/* ###############card end###################################### */}
          {this.state.trains.length === 0 ? (
            <tr align="center">
              <td colSpan="8">
                <h3>OOPS! No Trains Available!</h3>
              </td>
            </tr>
          ) : (
            this.state.trains.map((train) => (
              <div className="card teal" key={train.id}>
                <h3 className="subheader white-text">
                  {train.train_id} {train.train_name} Runs on: S M T W T F S
                  Mail/Express
                </h3>
                <ul className="list">
                  <li className="waves-effectt">
                    <div className="valign-wrapper">
                      <i className="material-icons left circle white">train</i>
                      <div className="title white-text">
                        {train.departure_station}{" "}
                        <i className="material-icons white-text">timeline</i>{" "}
                        {train.arrival_station}
                        <br />
                        <br />
                        <span className="white-text">
                          {train.departure_time} to {train.arrival_time}
                        </span>
                        <br />
                        <span className="white-text">
                          {" "}
                          {this.state.departuredate}
                        </span>
                      </div>
                      <div className="title align-right">
                        <br />
                        <br />
                        <span className="white-text">
                          General Fare: ₹ {train.general_fare}
                        </span>
                        <br />
                        <span className="white-text">
                          Ladies Fare: ₹ {train.ladies_fare}
                        </span>
                      </div>
                      <Link
                        to={"/booktrain/" + train.id}
                        className="medium material-icons ml-auto white-text"
                      >
                        navigation
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          )}
          {/* ###############trial card end###################################### */}
        </div>
      </div>
    );
  }
}

export default AllTrainList;
