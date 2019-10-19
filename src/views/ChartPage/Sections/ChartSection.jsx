import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/chart/canvasjs.react';
import withStyles from "@material-ui/core/styles/withStyles";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class ChartSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      view: false,
      loader: false,
      fileImage: '',
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
    this.getDataAll();
    this.getDataVerified();
    this.getDataNotVerified();
  }

  getDataAll = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/0')
      .then(res => {
        this.setState({ data0: res.data0 });
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
        this.setState({ data1: res.data1 });
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
        this.setState({ data9: res.data9 });
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
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const { classes } = this.props;
    console.log("classes: "+classes)
    const graph = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      // title: {
      //   text: "Graph Violation Data"
      // },
      axisY: {
        title: "Bounce Rate",
      },
      axisX: {
        valueFormatString: "MMM"
      },
      data: [{
        yValueFormatString: "#,###",
				xValueFormatString: "MMMM",
        type: "line",
        dataPoints: [
          { x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
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
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: this.state.data0.length - this.state.data1.length , label: "Pending Data" },
          { y: this.state.data9.length, label: "Not Valid Report" },
          { y: this.state.data1.length, label: "Verified Data Report" },
        ]
      }]
    }

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Graph Violation Data</h2>
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
        <h2 className={classes.title}>Status Violation Data</h2>
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
