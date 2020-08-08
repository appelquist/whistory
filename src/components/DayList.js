import React, { Component } from "react";
import Day from "./Day.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/DayList.css";

class DayList extends Component {
  constructor(props) {
    super(props);
    this.addDays = this.addDays.bind(this);
    this.removeDays = this.removeDays.bind(this);
  }

  async addDays() {
    await this.props.changeDays(this.props.days + 7);
    this.props.getData(this.props.station);
  }

  async removeDays() {
    await this.props.changeDays(this.props.days - 7);
    this.props.getData(this.props.station);
  }

  showHours(key) {

  }

  render() {
    const { data } = this.props;
    return (
      <div className="DaysList">
        <div className="DaysList-table" id="scrollDaysList">
          <div className="DaysList-row DaysList-header">
            <div className="DaysList-cell header-cell Daylist-column-heading">Temperatur</div>
            <div className="DaysList-cell header-cell Daylist-column-heading">Vindhastighet</div>
            <div className="DaysList-cell header-cell Daylist-column-heading">Vindriktning</div>
            <div className="DaysList-cell header-cell Daylist-column-heading">Lufttryck</div>
            <div className="DaysList-cell header-cell Daylist-column-heading Daylist-column-heading-datum">Datum</div>
          </div>
          {data && data.map((day, i) => (
            <Day data={day} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default DayList;
