import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

class PressurePlot extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const { data } = this.props;
    return (
      <div style={{ height: "25%", width: "50%" }}>
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
            legend: "pressure",
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

export default PressurePlot;
