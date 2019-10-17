import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import History from 'components/History/History';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from 'axios';

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class ViolationSection extends React.Component {
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
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/1')
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

  toggleView = id => {
    this.setState({
      id: id,
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  mapToAlphaGrid = () => {
    return this.state.data.sort((a, b) => b.created - a.created)
      .reduce((menu, item) => {
        if (menu[item.id.charAt(0)]) {
          // Add to existing menu item
          menu[item.id.charAt(0)].push(item)
        } else {
          // Create new menu item
          menu[item.id.charAt(0)] = [item];
        }
        return menu;
      }, {});

  };

  renderAll = () => {
    const { classes } = this.props;
    let toggleView = this.toggleView;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const menuItems = this.mapToAlphaGrid();
    console.log("mappping _result: " + menuItems);
    return Object.keys(menuItems).map(key => {
      const items = menuItems[key];
      return (
        <GridContainer className="justify-content-center">
          {items.map(item => {
            return (

              <GridItem xs={12} sm={12} md={3}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                    <img src={process.env.REACT_APP_API_PATH + '/image/ticket/' + item.documentation} alt="..." style={
                      {
                        width: "183px", height: "183px"
                      }
                    } />
                    {/* <img src={process.env.REACT_APP_API_PATH + '/image/ticket/' + item.documentation} alt="..." className={imageClasses}  /> */}
                  </GridItem>
                  <h5 className={classes.cardTitle}>
                    {item.vehicle_id}
                    <br />
                    <small className={classes.smallTitle}>{item.violance_address}</small>
                    <br />
                    <small className={classes.smallTitle}>{item.incident_date}</small>
                    <br />
                    <button title="View Data" className="px-3 py-1 mr-1 btn btn-primary" onClick={() => toggleView(i)}><i className="fa fa-search"></i>Detail</button>
                    {console.log("item.id: "+item.id)}
                  </h5>
                </Card>
              </GridItem>
            )
          })}
        </GridContainer>
      )
    });
  };

  render() {
    const { classes } = this.props;
    var viewStyle = {
      overflowWrap: 'break-word'
    }
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Data Pelanggaran Terverifikasi</h2>
        <div>
          {
            this.renderAll()
          }
        </div>
        <Modal isOpen={this.state.view} toggle={() => this.toggleView(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleView(this.state.id)}>Data Tiket</ModalHeader>
          <ModalBody className="modal-body-display d-block">
            <Col sm="12" lg="12" className="m-auto">
              <Row>
                <Col xs="3">No Kendaraan</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.vehicle_id}</Col>
                <div className="w-100 py-2"></div>
                <Col xs="3">Jenis Pelanggaran</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.violation_type}</Col>
                <div className="w-100 py-2"></div>
                <Col xs="3">Detail</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.detail}</Col>
                <div className="w-100 py-2"></div>
                <Col xs="3">TKP</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.violance_address}</Col>
                <div className="w-100 py-2"></div>
                <Col xs="3">Tanggal</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.incident_date}</Col>
                <div className="w-100 py-2"></div>
                <Col xs="3">Status</Col>
                <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>Closed</Col>
                <div className="w-100 py-2"></div>
                <Col xs="12">
                  <img className="d-block w-100" src={process.env.REACT_APP_API_PATH + '/image/ticket/' + this.state.focus.documentation} alt='Ticket' />
                </Col>
                <div className="w-100 py-2"></div>
                <Col xs="12">
                  <History history={this.state.history} />
                </Col>
              </Row>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleView(this.state.id)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default withStyles(teamStyle)(ViolationSection);
