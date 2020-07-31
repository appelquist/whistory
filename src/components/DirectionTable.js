import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DirectionTable extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
      directionData: [{
          id: "",
          data: []
      }],
  }

  render() {
    const { directionData } = this.props;
    const data = directionData[0].data;
    return (
      <div
        className="DirectionTable"
        style={{
          width: "50%",
          height: "25%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data.map((direction) => (
          <div>
            <FontAwesomeIcon
              icon="arrow-up"
              transform={{ rotate: 180 + direction.y }}
            />{" "}
            <h5>{direction.x}</h5>
          </div>
        ))}
      </div>
    );
  }
}

export default DirectionTable;
