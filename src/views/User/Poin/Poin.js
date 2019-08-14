import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../server/AuthService';

class Poin extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/login';
    }
    this.state = {
      data: [],
      focus: [],
      id: '',
      point: '-',
      view: false
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/user/' + this.Auth.getProfile().id)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(localStorage.getItem('serverAPI') + '/point/user/' + this.Auth.getProfile().id)
      .then(res => {
        if (res.data) {
          this.setState({ point: res.data[0].point });
        }
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
      id: id,
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
          label: 'Ticket ID',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Point',
          field: 'point',
          sort: 'asc'
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc'
        },
        {
          label: 'Tanggal',
          field: 'created',
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
    var status = ["Active", "Closed", "", "", "", "", "", "", "", "Archived"];
    data.rows.forEach(function (items, i) {
      rows.push({
        id: items.id,
        point: 10,
        status: status[items.status],
        created: new Date(items.updated).toLocaleString('en-GB'),
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
                <i className="fa fa-align-justify"></i><strong>Data Poin</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="3" lg="4" className="m-auto">
                    <img className="d-block w-100" src="/assets/img/medal.svg" alt='Medal' />
                    <div className="border rounded text-center m-4 h1">{this.state.point}</div>
                  </Col>
                  <Col xs="12" sm="12" md="9" lg="8">
                    <MDBDataTable
                      striped
                      bordered
                      small
                      data={dataFix}
                    // paginationLabel={["<", ">"]}
                    />
                  </Col>
                </Row>

                <Modal isOpen={this.state.view} toggle={() => this.toggleView(this.state.id)} className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleView(this.state.id)}>Data Poin</ModalHeader>
                  <ModalBody className="modal-body-display">
                    <Col xs="12" className="m-auto">
                      <Row>
                        <Col xs="5">Ticket ID</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Point</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>10</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Status</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>
                          {this.state.focus.status === "0" ? "Active" :
                            this.state.focus.status === "1" ? "Closed" : "Archived"}
                        </Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Created</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.created).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Updated</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.updated).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggleView(this.state.id)}>Close</Button>
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

export default Poin;