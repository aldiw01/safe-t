import React, { Component } from 'react';

import CanvasJSReact from '../../../assets/chart/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class ChartSection extends React.Component {
  render() {
    const graph = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: "Graph Violation Data"
      },
      axisY: {
        title: "Bounce Rate",
        includeZero: false,
        suffix: "%"
      },
      axisX: {
        valueFormatString: "MMM"
      },
      data: [{
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
          { x: 1, y: 64 },
          { x: 2, y: 61 },
          { x: 3, y: 64 },
          { x: 4, y: 62 },
          { x: 5, y: 64 },
          { x: 6, y: 60 },
          { x: 7, y: 58 },
          { x: 8, y: 59 },
          { x: 9, y: 53 },
          { x: 10, y: 54 },
          { x: 11, y: 61 },
          { x: 12, y: 60 }
        ]
      }]
    }

    const pie = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Violation Traffic Sources"
      },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Pending Data" },
          { y: 49, label: "Not Valid Report" },
          { y: 9, label: "Verified Data Report" },
        ]
      }]
    }

    return (
      <div>
        <CanvasJSChart options={graph}
        /* onRef={ref => this.chart = ref} */
        />
        <br />
        <br />
        <br />
        <br />
        <CanvasJSChart options={pie}
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        <br />
        <br />
      </div>
    );
  }
}

export default ChartSection;
