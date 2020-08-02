import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Day extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      // <div
      //   style={{
      //     display: "flex",
      //     justifyContent: "space-between",
      //     alignItems: "center",
      //   }}
      // >
      //   <h5 style={{ width: "2rem" }}>{data.temperature}</h5>
      //   <h5 style={{ width: "2rem" }}>{data.velocity}</h5>
      //   <FontAwesomeIcon
      //     style={{ width: "2rem" }}
      //     icon="arrow-up"
      //     transform={{ rotate: 180 + data.direction }}
      //   />
      //   <h5 style={{ width: "2rem" }}>{data.pressure}</h5>
      //   <h5 style={{ width: "2rem" }}>{data.date}</h5>
      // </div>
      <div className="Day DaysList-row">
        <div className="DaysList-cell">{data.temperature}</div>
        <div className="DaysList-cell">{data.velocity}</div>
        <div className="DaysList-cell"><FontAwesomeIcon icon="arrow-up" transform={{rotate: 180 + data.direction}} /></div>
        <div className="DaysList-cell">{data.pressure}</div>
        <div className="DaysList-cell">{data.date}</div>
      </div>
    );
  }
}

export default Day;
