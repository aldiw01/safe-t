import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../server/AuthService';

class TicketList extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/login';
    }
    this.state = {
      view: false,
      data: [],
      focus: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/user/' + this.Auth.getProfile().id)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      focus: {
        ...this.state.focus,
        [event.target.name]: event.target.value
      }
    })
  }

  toggleView = id => {
    this.setState({
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  render() {
    var viewStyle = {
      overflowWrap: 'break-word'
    }

    const data = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Reporter ID',
          field: 'reporter_id',
          sort: 'asc'
        },
        {
          label: 'Violator ID',
          field: 'violator_id',
          sort: 'asc'
        },
        {
          label: 'No Kendaraan',
          field: 'vehicle_id',
          sort: 'asc'
        },
        {
          label: 'Jenis Pelanggaran',
          field: 'violation_type',
          sort: 'asc'
        },
        {
          label: 'Tanggal Pelanggaran',
          field: 'incident_date',
          sort: 'asc'
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc'
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc'
        }
      ],
      rows: this.state.data
    }

    var rows = [];
    let toggleView = this.toggleView;
    var status = ["Active", "Closed"];
    data.rows.forEach(function (items, i) {
      rows.push({
        id: items.id,
        reporter_id: items.reporter_id,
        violator_id: items.violator_id,
        vehicle_id: items.vehicle_id,
        violation_type: items.violation_type,
        incident_date: items.incident_date,
        status: status[items.status],
        actions: <React.Fragment>
          <button title="View Data" className="px-3 py-1 mr-1 btn btn-primary" onClick={() => toggleView(i)}><i className="fa fa-search"></i></button>
        </React.Fragment>
      });
    });
    const dataFix = {
      columns: data.columns,
      rows: rows
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>My Ticket List</strong>
              </CardHeader>
              <CardBody>
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={dataFix}
                // paginationLabel={["<", ">"]}
                />

                <Modal isOpen={this.state.view} toggle={() => this.toggleView(0)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleView(0)}>Data Tiket</ModalHeader>
                  <ModalBody className="modal-body-display d-block">
                    <Col sm="12" lg="12" className="m-auto">
                      <Row>
                        <Col xs="3">ID</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Reporter ID</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.reporter_id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Violator ID</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.violator_id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">No Kendaraan</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.vehicle_id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Jenis Pelanggaran</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.violation_type}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Detail</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.detail}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Tanggal</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.incident_date}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Status</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>Aktif</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Created</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.created).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Updated</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.updated).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                    <Col sm="12" lg="12" className="m-auto">
                      <img className="d-block w-100" src={localStorage.getItem('serverAPI') + '/uploads/ticket/' + this.state.focus.documentation} alt='Ticket' />
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggleView(0)}>Close</Button>
                  </ModalFooter>
                </Modal>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TicketList;