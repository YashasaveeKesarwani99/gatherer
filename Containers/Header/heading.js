import React, { Component } from "react";
import "./heading.css";
import { Route } from "react-router-dom";
import firebase from "firebase";
import Register from "../Register/register";
import MakeAnEvent from "../MakeAnEvent/makeAnEvent";
//importing sub headings
import SubHeadings from "../../Components/subHeading/subHeading";
import Auth from "../../Components/Auth/auth";
class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      isLoggedIn: false,
      firebaseConfig: "",
      hideAuth: false,
      fireDb: ""
    };
  }

  HideAuth = () => {
    this.setState({
      hideAuth: true
    });
  };

  render() {
    //rendering after auth page
    if (this.state.isLoggedIn) {
      return (
        <div>
          <div className="head">Gatherer</div>
          <SubHeadings />
        </div>
      );
    }

    //rendering auth page
    else {
      return (
        <div>
          <div className="head">Gatherer</div>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <Auth
                  isSignedUp={this.state.isSignedUp}
                  isLoggedIn={this.state.isLoggedIn}
                />
              );
            }}
          />
          <Route path="/makeAnEvent" render={() => <MakeAnEvent />} />
          <Route path="/Register" render={() => <Register />} />
        </div>
      );
    }
  }
}

export default Heading;
