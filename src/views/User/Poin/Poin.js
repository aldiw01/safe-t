import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
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
      view: false,
      point: 0,
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
        this.setState({
          data: res.data,
          // point: res.data.length * 10
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

  handleEdit = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      axios.put(localStorage.getItem('serverAPI') + '/vehicle/' + id, this.state.focus)
        .then(res => {
          this.setState({
            edit: !this.state.edit,
          })
          alert(JSON.stringify(res.data));
          this.getData();
        })
        .catch(error => {
          alert(error);
        });
    }
  }

  handleDelete = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      axios.delete(localStorage.getItem('serverAPI') + '/vehicle/' + id)
        .then(res => {
          this.setState({
            delete: !this.state.delete,
          })
          alert(JSON.stringify(res.data));
          this.getData();
        })
        .catch(error => {
          alert(error);
        });
    }
  }

  toggleView = id => {
    this.setState({
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  toggleEdit = id => {
    this.setState({
      edit: !this.state.edit,
      focus: this.state.data[id]
    });
  }

  toggleDelete = id => {
    this.setState({
      delete: !this.state.delete,
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
    data.rows.forEach(function (items, i) {
      rows.push({
        id: items.id,
        point: 10,
        created: items.created,
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
              <CardBody className="d-flex">
                <Col sm="12" lg="4" className="m-auto">
                  <img className="d-block w-100" src="/assets/img/medal.svg" alt='Medal' />
                  <div className="border rounded text-center m-4 h1">{this.state.point}</div>
                </Col>
                <Col xs="8" xl="8" sm="12">
                  <MDBDataTable
                    striped
                    bordered
                    small
                    data={dataFix}
                  // paginationLabel={["<", ">"]}
                  />
                </Col>

                <Modal isOpen={this.state.view} toggle={() => this.toggleView(0)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleView(0)}>Data Poin</ModalHeader>
                  <ModalBody className="modal-body-display">
                    <Col sm="12" lg="5" className="m-auto">
                      <Row>
                        <Col xs="5">Ticket ID</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Point</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>10</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Created</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.created}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Updated</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.updated}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                    <Col sm="12" lg="7" className="m-auto">
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

export default Poin;