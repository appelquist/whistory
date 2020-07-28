import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { getTemperatureData, getPressureData, getWindVelocityData, getWindDirectionData } from "./services/data";
import "./App.css";
import StationForm from "./components/StationForm";
import TemperaturePlot from "./components/TemperaturePlot";
import PressurePlot from "./components/PressurePlot";
import WindPlot from "./components/WindPlot";


library.add(faArrowUp)

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
    const windVelocityData = await getWindVelocityData(station, 7);
    const windDirectionData = await getWindDirectionData(station, 7);
    this.setState({
      data: { temperature: temperatureData, pressure: pressureData, velocity: windVelocityData, direction: windDirectionData },
    });
  }

  async componentDidMount() {}
  render() {
    const { temperature, pressure, velocity, direction } = this.state.data;
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <StationForm getData={this.getData} />
        <TemperaturePlot data={temperature} />
        <PressurePlot data={pressure}/>
        <WindPlot velocityData={velocity} directionData={direction} />
      </div>
    );
  }
}

export default App;
