import React, { Component } from "react";
import RegistrationService from "../../Services/RegistrationService";

class Register extends Component {
  state = {
    // id: this.props.match.params.id,
    username: "",
    name: "",
    age: "",
    gender: "male",
    email: "",
    phone: "",
    password: "",
    role: "USER",

    usernameError:false,
    nameError:false,
    ageError:false,
    emailError:false,
    phoneError:false,
    passwordError:false
  };

  validateEmail(email){
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if(result===true){
      this.setState({
        emailError:false,
        email:email
      })
    } else{
      this.setState({
        emailError:true
      })
    }
  }

  onHandleChange = (event) => {
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });

    const value = event.target.value;
    const name1 =  event.target.name;
    this.setState({
      [name1]: value
    });
    if(name1==='username'){
      if(value==='' || value===null ){
        this.setState({
          usernameError:true
        })
      } else {
        this.setState({
          usernameError:false,     
          name1:value
        })
      }
    }
    if(name1==='name'){
      if(value==='' || value===null ){
        this.setState({
          nameError:true
        })
      } else {
        this.setState({
          nameError:false,     
          naname1me:value
        })
      }
    }
    if(name1==='age'){
      if(value==='' || value===null ){
        this.setState({
          ageError:true
        })
      } else {
        this.setState({
          ageError:false,     
          name1:value
        })
      }
    }
    if(name1==='email'){
      this.validateEmail(value);
    }
    if(name1==='phone'){
      const pattern = /[0-9]{10,12}/g;
      const result = pattern.test(value);
      if(value==='' || value===null || result===false){
        this.setState({
          phoneError:true
        })
      } else {
        this.setState({
          phoneError:false,     
          name1:value
        })
      }
    }

    if(name1==='password'){
      const pattern = /[a-zA-Z0-9]{8}/g;
      const result = pattern.test(value);
      if(value==='' || value===null || result===false){
        this.setState({
          passwordError:true
        })
      } else {
        this.setState({
          passwordError:false,     
          name1:value
        })
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.username ==='' || this.state.password ===''|| this.state.name ===''|| this.state.age ===''|| this.state.email ===''|| this.state.phone ===''){
        if(this.state.username ==='') {
        this.setState({
          usernameError:true
        })
      }
      if(this.state.name ==='') {
        this.setState({
          nameError:true
        })
      }
      if(this.state.age ==='') {
        this.setState({
          ageError:true
        })
      }
      if(this.state.email ==='') {
        this.setState({
          emailError:true
        })
      }
      if(this.state.phone ==='') {
        this.setState({
          phoneError:true
        })
      }
      if(this.state.password ==='') {
        this.setState({
          passwordError:true
        })
      }
      // alert("Enter Valid Form Values !!!");
    } else {
    let registerData = this.state;
    console.log("submitted", registerData);
    JSON.stringify(registerData);
    console.log("userData => " + JSON.stringify(registerData));

    RegistrationService.userRegistration(registerData).then((res) => {
      console.log("res", res);
      this.props.history.push('/login');
      alert("Successfully Registered Login with your Credentials !!!");
    });
  }
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{ backgroundColor: "#26a69a" }}>
            <a href="/" className="brand-logo">
              Register
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text"></i>
                </h3>
                <h4 className="left-align">Registration Form</h4>
                <div className="left-align light">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="UserName"
                          type="text"
                          className="validate"
                          name="username"
                          value={this.state.username}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="UserName">Username</label>
                        {this.state.usernameError ? <span style={{color: "red"}}>username field cannot be empty !!!</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="name"
                          type="text"
                          className="validate"
                          name="name"
                          value={this.state.name}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="name">Name</label>
                        {this.state.nameError ? <span style={{color: "red"}}>name field cannot be empty !!!</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="age"
                          type="number"
                          className="validate"
                          name="age"
                          value={this.state.age}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="age">Age</label>
                        {this.state.ageError ? <span style={{color: "red"}}>age field cannot be empty !!!</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <p>
                          <label>
                            <input
                              name="gender"
                              type="radio"
                              value="male"
                              onChange={this.onHandleChange}
                              defaultChecked
                            />
                            <span>Male</span>
                          </label>
                          <label>
                            <input name="gender" type="radio" value="female" onChange={this.onHandleChange} />
                            <span>Female</span>
                          </label>
                        </p>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="Email"
                          type="email"
                          className="validate"
                          name="email"
                          value={this.state.email}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="Email">Email</label>
                        {this.state.emailError ? <span style={{color: "red"}}>email syntax should be, "email@test.com"</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="phone"
                          type="number"
                          className="validate"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="phone">Phone</label>
                        {this.state.phoneError ? <span style={{color: "red"}}>phone must be 10 digits !!!</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="Password"
                          type="password"
                          className="validate"
                          name="password"
                          value={this.state.password}
                          onChange={this.onHandleChange}
                        />
                        <label htmlFor="Password">Password</label>
                        {this.state.passwordError ? <span style={{color: "red"}}>password must contain atleast 8 characters !!!</span> : ''}
                      </div>
                      <div className="input-field col s12">
                        <button
                          id="register"
                          type="submit"
                          className="waves-effect waves-light btn"
                          onClick={this.onSubmit}
                        >
                          Register
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

export default Register;
