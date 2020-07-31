import React, { Component } from "react";
import Day from "./Day.js";

class DayList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { temperature, pressure, velocity, direction } = this.props.data;
    let daysData;
    try {
      daysData = temperature[0].data.map((temperature) => {
        return {
          temperature: temperature.y,
          velocity: velocity[0].data.filter((val) => val.x === temperature.x)[0]
            .y,
          direction: direction[0].data.filter(
            (val) => val.x === temperature.x
          )[0].y,
          pressure: pressure[0].data.filter((val) => val.x === temperature.x)[0]
            .y,
          date: temperature.x,
        };
      });
    } catch (e) {
      daysData = [];
    }
    return (
      <div style={{width: "50%"}}>
        <ul style={{listStyle: "none"}}>
          {daysData.map((day) => (
            <li>
              <Day data={day} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DayList;
