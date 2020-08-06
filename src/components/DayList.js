import React, { Component } from "react";
import Day from "./Day.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../DayList.css";

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
        <div className="DaysList-table">
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
        <div>
        {this.props.days > 6  && <button onClick={this.removeDays} style={{border: "none", outline: "none", background: "#EEF0F2", cursor: "pointer"}}><FontAwesomeIcon icon="caret-up" size="3x"/></button>}
        <button  onClick={this.addDays} style={{border: "none", outline: "none", background: "#EEF0F2", cursor: "pointer"}}><FontAwesomeIcon icon="caret-down" size="3x"/></button>
        </div>
      </div>
    );
  }
}

export default DayList;
