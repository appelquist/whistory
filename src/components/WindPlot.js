import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import DirectionTable from "./DirectionTable";

class WindPlot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { velocityData, directionData } = this.props;
    console.log(velocityData);
    return (
      <div style={{ height: "50%", width: "50%" }}>
        {velocityData && (
          <ResponsiveLine
            data={velocityData}
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
              legend: "velocity",
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
        )}
        {directionData && <DirectionTable data={directionData} />}
      </div>
    );
  }
}

export default WindPlot;
