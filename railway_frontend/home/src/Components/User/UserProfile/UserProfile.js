import React, { Component } from "react";
import UserService from "../../../Services/UserService";
import UserNav from "../UserNav/UserNav";
import UserSidebar from "../UserSidebar/UserSidebar";

class UserProfile extends Component {
    state = {
        id: '',
        username: "",
        name: "",
        age: "",
        gender: "male",
        email: "",
        phone: "",
        // password: "",
        user:{}
      };
    
      onHandleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      componentDidMount() {
        var userid = localStorage.getItem('id');
        userid = userid.replace(/^"|"$/g, '');
          console.log(userid);
          this.setState({ id: userid});
        
        UserService.getUserById(userid).then((res) => {
          console.log("userbyId", res);
          this.setState({ user: res.data });
          this.setState({
            username: this.state.user.username,
            name: res.data.name,
            age: res.data.age,
            gender: res.data.gender,
            email: res.data.email,
            phone: res.data.phone
          });
        });
      }
    
      onUpdate = (e) => {
        e.preventDefault();
        let userData = this.state;
        console.log("submitted", userData);
        console.log("userData => " + JSON.stringify(userData));
    
        UserService.profileUpdate(userData,this.state.id).then((res) => {
          console.log("res", res);
          alert(res.data);
          this.props.history.push('/usrdash');
        });
      };
  render() {
    return (
      <div>
        <UserNav />
        <UserSidebar />
        <div className="container-fluid">
        <div className="row">
        <div className="col s12 m12">
          <div className="card teal white-text">
          <h5 className="center"><i className="material-icons white-text">person</i>My Profile</h5>
            <div className="card-content valign-wrapper">
                
                <form className="col s12 m12">
                    <div className="row">
                      
                      <div className="input-field col s12 m4">
                      <span htmlFor="UserName" className="white-text helper-text">Username</span>
                        <input
                          id="UserName"
                          type="text"
                          className="validate white-text"
                          name="username"
                          disabled
                          value={this.state.username}
                          onChange={this.onHandleChange}
                        />
                        
                      </div>
                      <div className="input-field col s12 m4">
                      <span htmlFor="name" className="white-text helper-text">Name</span>
                        <input
                          id="name"
                          type="text"
                          className="validate white-text"
                          name="name"
                          value={this.state.name}
                          onChange={this.onHandleChange}
                        />
                      </div>
                      <div className="input-field col s12 m4">
                      <span htmlFor="age" className="white-text helper-text">Age</span>
                        <input
                          id="age"
                          type="number"
                          className="validate white-text"
                          name="age"
                          value={this.state.age}
                          onChange={this.onHandleChange}
                        />
                      </div>
                      <div className="input-field col s12 m4">
                      <span className="white-text helper-text">Gender</span>
                        <p>
                          <label>
                            <input
                              name="gender"
                              type="radio"
                              value="male"
                              onChange={this.onHandleChange}
                              defaultChecked
                            />
                            <span className="white-text">Male</span>
                          </label>
                          <label>
                            <input name="gender" type="radio" value="female" onChange={this.onHandleChange} />
                            <span className="white-text">Female</span>
                          </label>
                        </p>
                      </div>
                      <div className="input-field col s12 m4">
                      <span htmlFor="email" className="white-text helper-text">Email</span>
                        <input
                          id="email"
                          type="email"
                          className="validate white-text"
                          name="email"
                          value={this.state.email}
                          onChange={this.onHandleChange}
                        />
                      </div>
                      <div className="input-field col s12 m4">
                      <span htmlFor="phone" className="white-text helper-text">Phone</span>
                        <input
                          id="phone"
                          type="number"
                          className="validate white-text"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.onHandleChange}
                        />
                      </div>
                      {/* <div className="input-field col s12 m4">
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                          onClick={this.onUpdate}
                        >
                          Register
                        </button>
                      </div> */}
                      </div>
                      </form>

              
              {/* <div class="card-icon">
                <i class="material-icons medium valign">person</i>
              </div> */}
            </div>
            <div className="card-action">
              <a href="/usrdash" onClick={this.onUpdate}>Update</a>
            </div>
          </div>
        </div>
        
 
        </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
