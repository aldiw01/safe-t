import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/chart/canvasjs.react';
import withStyles from "@material-ui/core/styles/withStyles";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import axios from 'axios';
import { throws } from 'assert';

class ChartSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      view: false,
      loader: false,
      fileImage: '',
      data: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      }],
      data0: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      }],
      data1: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      }],
      data9: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      }],
      focus: {
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      },
      history: [{
        id: '',
        ticket_id: '',
        from_name: '',
        info: '',
        message: '',
        status: '',
        created: '',
        updated: '',
      }]
    }
  }

  componentDidMount() {
    this.getData();
    this.getDataAll();
    this.getDataVerified();
    this.getDataNotVerified();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/all')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        this.setState({
          data: [{
            id: '',
            reporter_id: '',
            vehicle_id: '',
            violation_type: '',
            detail: '',
            incident_date: '',
            documentation: '',
            violance_address: '',
            created: '',
            updated: '',
          }]
        })
        console.log(error);
      });
  }

  getDataAll = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/0')
      .then(res => {
        this.setState({ data0: res.data });
      })
      .catch(error => {
        this.setState({
          data0: [{
            id: '',
            reporter_id: '',
            vehicle_id: '',
            violation_type: '',
            detail: '',
            incident_date: '',
            documentation: '',
            violance_address: '',
            created: '',
            updated: '',
          }]
        })
        console.log(error);
      });
  }

  getDataVerified = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/1')
      .then(res => {
        this.setState({ data1: res.data });
      })
      .catch(error => {
        this.setState({
          data1: [{
            id: '',
            reporter_id: '',
            vehicle_id: '',
            violation_type: '',
            detail: '',
            incident_date: '',
            documentation: '',
            violance_address: '',
            created: '',
            updated: '',
          }]
        })
        console.log(error);
      });
  }

  getDataNotVerified = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/9')
      .then(res => {
        this.setState({ data9: res.data });
      })
      .catch(error => {
        this.setState({
          data9: [{
            id: '',
            reporter_id: '',
            vehicle_id: '',
            violation_type: '',
            detail: '',
            incident_date: '',
            documentation: '',
            violance_address: '',
            created: '',
            updated: '',
          }]
        })
        console.log(error);
      });
  }

  render() {
    var totalDate = []
    var listMonth = []
    var first
    var second
    for (let index = 0; index < this.state.data.length; index++) {
      totalDate[index] = this.state.data[index].incident_date
    }

    for (let index = 0; index < totalDate.length; index++) {
      first = totalDate[index][5]
      second = totalDate[index][6]
      listMonth[index] = first + second
      listMonth[index] = parseInt(listMonth[index], 10)
    }

    function getOccurrence(listMonth, value) {
      var count = 0;
      listMonth.forEach((v) => (v === value && count++));
      return count;
    }

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const { classes } = this.props;
    const graph = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      // title: {
      //   text: "Graph Violation Data"
      // },
      axisY: {
        title: "Jumlah Laporan",
      },
      axisX: {
        valueFormatString: "MMM"
      },
      data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "MMMM",
        type: "line",
        dataPoints: [
          { x: new Date(2017, 0), y: getOccurrence(listMonth, 1) },
          { x: new Date(2017, 1), y: getOccurrence(listMonth, 2) },
          { x: new Date(2017, 2), y: getOccurrence(listMonth, 3) },
          { x: new Date(2017, 3), y: getOccurrence(listMonth, 4) },
          { x: new Date(2017, 4), y: getOccurrence(listMonth, 5) },
          { x: new Date(2017, 5), y: getOccurrence(listMonth, 6) },
          { x: new Date(2017, 6), y: getOccurrence(listMonth, 7) },
          { x: new Date(2017, 7), y: getOccurrence(listMonth, 8) },
          { x: new Date(2017, 8), y: getOccurrence(listMonth, 9) },
          { x: new Date(2017, 9), y: getOccurrence(listMonth, 10) },
          { x: new Date(2017, 10), y: getOccurrence(listMonth, 11) },
          { x: new Date(2017, 11), y: getOccurrence(listMonth, 12) },
        ]
      }]
    }

    const pie = {
      exportEnabled: true,
      animationEnabled: true,
      // title: {
      //   text: "Violation Traffic Sources"
      // },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {total}%",
        dataPoints: [

          { y: this.state.data0.length, label: "Pending Data", total: (this.state.data0.length / (this.state.data0.length + this.state.data1.length + this.state.data9.length) * 100).toFixed(2), },
          { y: this.state.data9.length, label: "Not Valid Report", total: (this.state.data9.length / (this.state.data0.length + this.state.data1.length + this.state.data9.length) * 100).toFixed(2), },
          { y: this.state.data1.length, label: "Verified Data Report", total: (this.state.data1.length / (this.state.data0.length + this.state.data1.length + this.state.data9.length) * 100).toFixed(2), },
        ]
      }]

    }

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Graph Laporan Masuk</h2>
        <br />
        <br />
        <br />
        <br />
        <CanvasJSChart options={graph}
        /* onRef={ref => this.chart = ref} */
        />
        <br />
        <br />
        <br />
        <br />
        <h2 className={classes.title}>Status Laporan</h2>
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

export default withStyles(teamStyle)(ChartSection);
