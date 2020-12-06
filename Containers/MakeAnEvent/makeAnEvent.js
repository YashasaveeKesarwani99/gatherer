import React, { Component } from "react";
import "./makeAnEvent.css";
class MakeAnEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventVenue: ""
    };
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

  submitHandler = () => {};

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
      </div>
    );
  }
}

export default MakeAnEvent;
