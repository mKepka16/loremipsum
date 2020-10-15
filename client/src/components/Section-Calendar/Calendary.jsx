import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Calendary extends Component {
  state = {
    events: [
      {
        start: moment().add(6, "days").toDate(),
        end: moment().add(8, "days").toDate(),
        title: "Wisła to kurwa",
      },
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Wisła jebana jest"
      }
    ],
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default Calendary;
