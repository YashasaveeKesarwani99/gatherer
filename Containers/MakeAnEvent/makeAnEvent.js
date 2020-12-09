import React, { Component } from "react";
import "./makeAnEvent.css";
import fireDb from "../../Components/firebase/firebase";
class MakeAnEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventVenue: "",
      event: []
    };
  }

  componentDidMount() {
    fireDb.ref("gatherer/makeAnEvent").on("value", (snapshot) => {
      let studentlist = [];
      snapshot.forEach((snap) => {
        // snap.val() is the dictionary with all your keys/values from the 'students-list' path
        studentlist.push(snap.val());
      });
      this.setState({ event: studentlist });
    });
  }

  eventNameHandler = (e) => {
    e.preventDefault();
    this.setState({
      eventName: e.target.value
    });
  };

  eventDateHandler = (e) => {
    e.preventDefault();
    this.setState({
      eventDate: e.target.value
    });
  };

  eventVenueHandler = (e) => {
    e.preventDefault();
    this.setState({
      eventVenue: e.target.value
    });
  };

  submitHandler = () => {
    fireDb
      .ref()
      .child("gatherer/makeAnEvent")
      .push(this.state, (err) => {
        if (err) console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form className="makeanevent" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="enter a name for the event"
            onChange={(e) => this.eventNameHandler(e)}
            value={this.state.eventName}
          />
          <input
            placeholder="enter the venue"
            onChange={(e) => this.eventVenueHandler(e)}
            value={this.state.eventVenue}
          />
          <input
            placeholder="enter date for the event"
            onChange={(e) => this.eventDateHandler(e)}
            value={this.state.eventDate}
          />
          <button onClick={this.submitHandler}>Submit</button>
        </form>
        <div className="previousEvents">Your previous and coming up event</div>

        {this.state.event.map((i) => {
          console.log(i);
          return (
            <div className="eventTable">
              <div>{i.eventDate}</div>
              <div>{i.eventName}</div>
              <div>{i.eventVenue}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MakeAnEvent;
