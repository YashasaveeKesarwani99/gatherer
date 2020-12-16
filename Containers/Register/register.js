import React, { Component } from "react";
import fireDb from "../../Components/firebase/firebase";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
  }

  componentDidMount() {
    fireDb.ref("gatherer/makeAnEvent").on("value", (snapshot) => {
      let event = [];
      snapshot.forEach((snap) => {
        event.push(snap.val());
      });
      this.setState({ event });
    });
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>s.No.</th>
            <th>Date</th>
            <th>Name</th>
            <th>Venue</th>
            <th>Register</th>
          </tr>
          {this.state.event.map((obj) => {
            let c = 1;
            return (
              <tr>
                <th>{c}</th>
                <th>{obj.eventName}</th>
                <th>{obj.eventDate}</th>
                <th>{obj.eventVenue}</th>
                <th>Join</th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Register;
