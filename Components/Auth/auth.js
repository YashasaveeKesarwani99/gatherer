import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  //handeling the email input
  emailHandler = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };

  //handeling the password input
  passwordHandler = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  //posting the sign up data on database through REST API
  signUpHandler = (e, p) => {
    axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
      {
        email: e,
        password: p
      }
    );
  };

  render() {
    return (
      <form className="form">
        <input
          placeholder="email"
          onChange={(e) => this.emailHandler(e)}
          value={this.state.email}
        />
        <input
          placeholder="password"
          onChange={(e) => this.passwordHandler(e)}
          value={this.state.password}
        />
        <button
          onClick={() =>
            this.signUpHandler(this.state.email, this.state.password)
          }
        >
          Sign Up
        </button>
        <button onClick={this.loginHandler}>Log In</button>
      </form>
    );
  }
}

export default Auth;
