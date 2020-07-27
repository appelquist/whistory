import React, { Component } from "react";
import { getTemperatureData, getPressureData } from "./services/data";
import "./App.css";
import StationForm from "./components/StationForm";
import TemperaturePlot from "./components/TemperaturePlot";
import PressurePlot from "./components/PressurePlot";

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
    const temperatureData = await getTemperatureData(station, 7);
    const pressureData = await getPressureData(station, 7);
    this.setState({
      data: { temperature: temperatureData, pressure: pressureData },
    });
  }

  async componentDidMount() {}
  render() {
    const { temperature, pressure} = this.state.data;
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <StationForm getData={this.getData} />
        <TemperaturePlot data={temperature} />
        <PressurePlot data={pressure}/>
      </div>
    );
  }
}

export default App;
