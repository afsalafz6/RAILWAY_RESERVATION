import React, { Component } from "react";
import LoginService from "../../Services/LoginService";

class Login extends Component {
  state = {
    // id: this.props.match.params.id,
    username: "",
    password: "",
    usernameError:false,
    passwordError:false
  };

  onHandleChange = (event) => {
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });

    // const target = event.target;
    const value = event.target.value;
    const name =  event.target.name;
    this.setState({
      [name]: value
    });
    if(name==='username'){
      if(value==='' || value===null ){
        this.setState({
          usernameError:true
        })
      } else {
        this.setState({
          usernameError:false,     
          name:value
        })
      }
    }

    if(name==='password'){
      if(value==='' || value===null ){
        this.setState({
          passwordError:true
        })
      } else {
        this.setState({
          passwordError:false,     
          name:value
        })
      }
    }


  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.username ==='' || this.state.password ===''){
      if(this.state.username ==='') {
      this.setState({
        usernameError:true
      })
    }
    if(this.state.password ==='') {
      this.setState({
        passwordError:true
      })
    }
      // alert("Enter Valid Username and Password !!!");
    } else {
    let loginData = this.state;
    console.log("submitted", loginData);
    console.log("userData => " + JSON.stringify(loginData));

    LoginService.login(loginData).then((res) => {
      console.log("res", res);
      if (res.data.token) {
        localStorage.removeItem("user");
        localStorage.removeItem("admin");
        localStorage.removeItem("id");
        // this.props.history.push("/dashboard");
        // this.props.history.push("/dashboard", { id: res.data.loggeduser.id});
        if (res.data.loggeduser.role === "ADMIN") {
          this.props.history.push("/dashboard");
          localStorage.setItem("admin", JSON.stringify(res.data.token));
          localStorage.setItem("id", JSON.stringify(res.data.loggeduser.id));
        }
        if (res.data.loggeduser.role === "USER") {
          this.props.history.push("/usrdash");
          localStorage.setItem("user", JSON.stringify(res.data.token));
          localStorage.setItem("id", JSON.stringify(res.data.loggeduser.id));
        }
      }
    });
  }
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{ backgroundColor: "#26a69a" }}>
            <a href="/" className="brand-logo">
              Login
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="section"></div>
        <main>
          <center>
            {/* <img className="responsive-img" style={{ width: "250px"}} alt="responsive img"  src="https://tenor.com/blLPG.gif" /> */}
            <div className="section"></div>

            <h5 className="indigo-text">Please, login into your account</h5>
            <div className="section"></div>

            <div className="container">
              <div
                className="z-depth-1 grey lighten-4 row"
                style={{
                  display: "inline-block",
                  padding: "32px 48px 0px 48px",
                  border: "1px solid #EEE",
                }}
              >
                <form className="col s12" method="post">
                  <div className="row">
                    <div className="col s12"></div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                    <span htmlFor="username" className="teal-text helper-text">Username</span>
                      <input
                        className="validate"
                        type="text"
                        id="email"
                        name="username"
                        value={this.state.username}
                        onChange={this.onHandleChange}
                        required
                      />

                      {this.state.usernameError ? <label style={{ float: "right" }}>
                      <span className="pink-text">
                        <b>username field is empty !!!</b>
                      </span>
                    </label> : ''}

                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                    <span htmlFor="password" className="teal-text helper-text">Password</span>
                      <input
                        className="validate"
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onHandleChange}
                        required
                      />

                      {this.state.passwordError ? <label style={{ float: "right" }}>
                      <span className="pink-text">
                        <b>password field is empty !!!</b>
                      </span>
                    </label> : ''} 

                    </div>
                    <label style={{ float: "right" }}>
                      <a className="pink-text" href="#!">
                        <b>Forgot Password?</b>
                      </a>
                    </label>
                  </div>

                  <br />
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect"
                        style={{ backgroundColor: "#26a69a" }}
                        onClick={this.onSubmit}
                      >
                        Login
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
            <a href="/register">Register Account</a>
          </center>

          <div className="section"></div>
          <div className="section"></div>
        </main>
      </div>
    );
  }
}

export default Login;
