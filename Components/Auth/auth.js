import React, { Component } from "react";
import "./auth.css";
import 
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
        <button onClick={this.signUpHandler}>Sign In</button>
        <button onClick={this.loginHandler}>Log In</button>
      </form>
    );
  }
}

export default Auth;
