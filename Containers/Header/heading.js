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

  componentDidMount() {
    // Your web app's Firebase configuration
    this.setState({
      firebaseConfig: {
        apiKey: "AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
        authDomain: "auth-86847.firebaseapp.com",
        databaseURL: "https://auth-86847.firebaseio.com",
        projectId: "auth-86847",
        storageBucket: "auth-86847.appspot.com",
        messagingSenderId: "953040344962",
        appId: "1:953040344962:web:f22cfd26ea6e5c26bc219b"
      }
    });
    // Initialize Firebase

    //firebase.initializeApp(this.state.firebaseConfig);
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
                  firebaseConfig={this.state.firebaseConfig}
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
