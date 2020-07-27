import React, { Component } from "react";
import { getStations, getTemperatureData } from "./APICalls";
import "./App.css";
import FindStationForm from "./FindStationForm";
import { ResponsiveLine } from "@nivo/line";

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
    console.log(data);
    return (
      <div style={{height: "50vh", width: "50%"}}>
        <FindStationForm getData={this.getData} />
        {data &&
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "temperature",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          enableCrosshair={false}
          enableSlices="x"
        />
        }
      </div>
    );
  }
}

export default App;

