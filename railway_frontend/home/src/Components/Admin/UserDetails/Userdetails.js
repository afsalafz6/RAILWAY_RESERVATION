import React, { Component } from "react";
import UserService from "../../../Services/UserService";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

class Userdetails extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    UserService.getAllUser().then((res) => {
      console.log("all users", res);
      this.setState({ users: res.data });
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
                <h3>
                  <i className="mdi-content-send brown-text"></i>
                </h3>
                <h4 className="left-align">User Details</h4>
                <div className="left-align light">
                  <table className="striped">
                    <thead>
                      <tr>
                        {/* <th>User Id</th> */}
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.users.length === 0 ? (
                        <tr align="center">
                          <td colSpan="8">
                            <h3>OOPS! No Users Available!</h3>
                          </td>
                        </tr>
                      ) : (
                        this.state.users.map((user) => (
                          <tr key={user.id}>
                            {/* <td>{user.id}</td> */}
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td><button className="material-icons">visibility</button><button className="material-icons">delete</button></td>
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

export default Userdetails;
