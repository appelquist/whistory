import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Day extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      const { data } = this.props;
    return (
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h5 style={{width: "1rem"}}>{data.temperature}</h5>
        <h5 style={{width: "1rem"}}>{data.velocity}</h5>
        <FontAwesomeIcon
          icon="arrow-up"
          transform={{ rotate: 180 + data.direction }}
        />
        <h5>{data.pressure}</h5>
        <h5>{data.date}</h5>
      </div>
    );
  }
}

export default Day;
