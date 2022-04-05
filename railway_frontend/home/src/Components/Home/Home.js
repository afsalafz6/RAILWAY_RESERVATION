import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center teal-text text-lighten-2">
                Railway Reservation System
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  Public Transportation System Governed by Indian Government
                </h5>
              </div>
              <div className="row center">
                <a
                  href="/register"
                  id="download-button"
                  className="btn-large waves-effect waves-light teal lighten-1"
                >
                  Register
                </a>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="images/background1.jpg" alt="Railway img 1" />
          </div>
        </div>
        {/* tryiiii */}
        {/* <nav style={{ backgroundColor: "#26a69a" }}>
          <ul>
            <li data-target="slide-out" className="sidenav-trigger">
            <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="UserName"
                          type="text"
                          className="validate"
                          name="username"
                        />
                        <label htmlFor="UserName">Username</label>
                      </div>
                      <div className="input-field col s4">
                        <input
                          id="name"
                          type="text"
                          className="validate"
                          name="name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                      <div className="input-field col s4">
                      <button
                          type="submit"
                          className="waves-effect waves-light btn"
                        >
                          Search
                        </button>
                      </div>
                        </div>
                        </form>
            </li>
          </ul>
        </nav> */}
        {/* tryiiii */}

        <div className="container">
          <div className="section">
            {/* <!--   Icon Section   --> */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Speeds up Reservation</h5>

                  <p className="light">
                    We did most of the functionality provide by Indian Railway
                    in the way of Ticket Reservation.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">Available 24/7</h5>

                  <p className="light">
                    you areable to book a Reservation across all over India at
                    any time.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">settings</i>
                  </h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">
                    We have provided all require functionality with great user
                    experience. all kind of user can register through this
                    platform easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  Railway Booking make Easy
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img
              src="images/background2.jpg"
              alt="Unsplashed background img 2"
            />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text"></i>
                </h3>
                <h4>About Us</h4>
                <p className="left-align light">
                  The railway reservation system facilitates the passengers to
                  enquiry about the trains available on the basis of source and
                  destination, booking and cancellation of tickets, enquiry
                  about the status of the booked ticket, etc
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  Railway Booking make Easy
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img
              src="images/background3.jpg"
              alt="Unsplashed background img 3"
            />
          </div>
        </div>

        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Railway</h5>
                <p className="grey-text text-lighten-4">
                  Rail transport is also known as train transport. It is a means
                  of transport, on vehicles which run on tracks (rails or
                  railroads). It is one of the most important, commonly used and
                  very cost effective modes of commuting and goods carriage over
                  long, as well as, short distances.
                </p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">
                      Reserve Tickets
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      Download Tickets
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">
                      Admin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made for{" "}
              <a className="brown-text text-lighten-3" href="/">
                Railway Reservation
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
