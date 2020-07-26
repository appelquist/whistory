import React, { Component } from "react";
import { getStations, getTemperatureData } from "./APICalls";
import "./App.css";
import FindStationForm from "./FindStationForm";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: {},
      data: false,
    };
    this.getData = this.getData.bind(this);
  }

  async getData(station) {
    const data = await getTemperatureData(station, 7);
    this.setState({
      data: data,
    });
  }

  async componentDidMount() {}
  render() {
    const data = this.state.data;
    return (
      <div>
        <FindStationForm getData={this.getData} />
        {data && (
          <XYPlot xType='ordinal' height={800} width={800}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
        )}
      </div>
    );
  }
}

export default App;
