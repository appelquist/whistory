import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { getWeatherData } from "./services/data";
import "./App.css";
import StationForm from "./components/StationForm";
// import TemperaturePlot from "./components/TemperaturePlot";
// import PressurePlot from "./components/PressurePlot";
// import WindPlot from "./components/WindPlot";
// import DirectionTable from "./components/DirectionTable";
import DayList from "./components/DayList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowUp, faCaretDown, faCaretUp);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      days: 6,
    };
    this.getData = this.getData.bind(this);
    this.changeDays = this.changeDays.bind(this);
    this.addDays = this.addDays.bind(this);
    this.removeDays = this.removeDays.bind(this);
  }

  async getData(station) {
    this.setState({
      data: await getWeatherData(station, this.state.days),
      station: station,
    });
  }

  async changeDays(days) {
    this.setState({
      days: days,
    });
  }

  async addDays() {
    await this.changeDays(this.state.days + 7);
    this.getData(this.state.station);
  }

  async removeDays() {
    await this.changeDays(this.state.days - 7);
    this.getData(this.state.station);
  }

  async componentDidMount() {}
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <StationForm getData={this.getData} />
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <DayList
            data={this.state.data}
            getData={this.getData}
            changeDays={this.changeDays}
            station={this.state.station}
            days={this.state.days}
          />
          <div>
        {this.state.days > 6  && <button onClick={this.removeDays} style={{border: "none", outline: "none", background: "#EEF0F2", cursor: "pointer"}}><FontAwesomeIcon icon="caret-up" size="3x"/></button>}
        <button  onClick={this.addDays} style={{border: "none", outline: "none", background: "#EEF0F2", cursor: "pointer"}}><FontAwesomeIcon icon="caret-down" size="3x"/></button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
