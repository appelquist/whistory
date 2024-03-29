import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Hour extends Component {
  render() {
    const { data } = this.props;
    let direction = 0;
    if((Number(data.direction) + 180) > 359) {
      direction = Number(data.direction) - 180;
    } else {
      direction = Number(data.direction) + 180;
    }
    return (
      <div className="Hour DaysList-row">
        <div className="DaysList-cell">{data.temperature}</div>
        <div className="DaysList-cell">{data.velocity}</div>
        <div className="DaysList-cell">
          <FontAwesomeIcon
            icon="arrow-up"
            transform={{ rotate: direction }}
          />
        </div>
        <div className="DaysList-cell">{data.pressure}</div>
        <div className="DaysList-cell">{`${data.hour.getHours()}:00`}</div>
      </div>
    );
  }
}

export default Hour;
