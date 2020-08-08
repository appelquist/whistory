import React, { Component } from "react";
import STATIONS_SEARCH_DATA from "../constants/searchData";
import "../styles/StationForm.css";

class StationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const station = STATIONS_SEARCH_DATA.find(
      (station) =>
        station.searchName.toLowerCase() ===
        this.state.stationName.toLowerCase()
    );
    const days = 6;
    this.props.getData(station, days);
  }

  handleChange(e) {
    this.setState({
      stationName: e.target.value,
    });
  }

  render() {
    const { stationName } = this.state;
    return (
      <div className="StationForm-container">
        <form className="StationForm" onSubmit={this.handleSubmit}>
          <input
            className="StationForm-input"
            type="text"
            name="stationName"
            value={stationName}
            onChange={this.handleChange}
            placeholder="Ort..."
          ></input>
          <button className="StationForm-submit" type="submit">
            Hämta data!
          </button>
        </form>
      </div>
    );
  }
}

export default StationForm;
