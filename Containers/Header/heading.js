import React, { Component } from "react";
import "./heading.css";
import firebase from "firebase";
//importing sub headings
import SubHeadings from "../../Components/subHeading/subHeading";
import Auth from "../../Components/Auth/auth";
class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
      authDomain: "auth-86847.firebaseapp.com",
      databaseURL: "https://auth-86847.firebaseio.com",
      projectId: "auth-86847",
      storageBucket: "auth-86847.appspot.com",
      messagingSenderId: "953040344962",
      appId: "1:953040344962:web:f22cfd26ea6e5c26bc219b"
    };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
  }

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
          <Auth
            firebaseConfig={firebaseConfig}
            isSignedUp={this.state.isSignedUp}
            isLoggedIn={this.state.isLoggedIn}
          />
        </div>
      );
    }
  }
}

export default Heading;
