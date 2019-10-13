import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../server/AuthService';
import Spinner from 'react-spinkit';

class Parkir extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/admin/login';
    }
    this.state = {
      vehicle_id: '',
      edit: false,
      delete: false,
      loader: false,
      data: [{
        vehicle_id: '',
        parking_name: '',
        parking_slot: ''
      }],
      focus: {
        vehicle_id: '',
        parking_name: '',
        parking_slot: ''
      },
      new: {
        vehicle_id: '',
        parking_name: '',
        parking_slot: ''
      }
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/parking/all')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      focus: {
        ...this.state.focus,
        [event.target.name]: event.target.value
      }
    })
  }

  handleEdit = (event) => {
    event.preventDefault();
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      const req = {
        vehicle_id: this.state.focus.vehicle_id,
        parking_name: this.state.focus.parking_name,
        parking_slot: this.state.focus.parking_slot,
      }
      axios.put(localStorage.getItem('serverAPI') + '/parking/update/' + this.state.vehicle_id, req)
        .then(res => {
          this.setState({
            edit: !this.state.edit,
            loader: false,
          })
          alert(res.data.message);
          this.getData();
        })
        .catch(error => {
          alert(error);
          console.log(error);
        });
    }
  }

  handleDelete = (vehicle_id) => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      axios.delete(localStorage.getItem('serverAPI') + '/parking/close/' + vehicle_id)
        .then(res => {
          this.setState({
            delete: !this.state.delete,
            loader: false
          })
          alert(res.data.message);
          this.getData();
        })
        .catch(error => {
          alert(error);
          console.log(error);
        });
    }
  }

  toggleEdit = (vehicle_id) => {
    this.setState({
      vehicle_id: vehicle_id,
      edit: !this.state.edit,
      focus: this.state.data[vehicle_id]
    });
  }

  toggleDelete = (vehicle_id) => {
    this.setState({
      vehicle_id: vehicle_id,
      delete: !this.state.delete,
      focus: this.state.data[vehicle_id]
    });
  }

  render() {
    var viewStyle = {
      overflowWrap: 'break-word'
    }

    const data = {
      columns: [
        {
          label: 'No Kendaraan',
          field: 'vehicle_id',
          sort: 'asc'
        },
        {
          label: 'Gedung',
          field: 'parking_name',
          sort: 'asc'
        },
        {
          label: 'Slot Parkir',
          field: 'parking_slot',
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
    let toggleEdit = this.toggleEdit;
    let toggleDelete = this.toggleDelete;
    data.rows.forEach(function (items, i) {
      if (items.vehicle_id !== '') {
        rows.push({
          vehicle_id: items.vehicle_id,
          parking_name: items.parking_name,
          parking_slot: items.parking_slot,
          actions: <React.Fragment>
            <button title="Edit Data" className="px-3 py-1 mr-1 btn btn-warning" onClick={() => toggleEdit(i)}><i className="fa fa-pencil"></i></button>
            <button title="Delete Data" className="px-3 py-1 mr-1 btn btn-danger" onClick={() => toggleDelete(i)}><i className="fa fa-minus-circle"></i></button>
          </React.Fragment>
        });
      }
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
                <i className="fa fa-align-justify"></i><strong>Data Parkir</strong>
              </CardHeader>
              <CardBody>
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={dataFix}
                // paginationLabel={["<", ">"]}
                />

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(this.state.vehicle_id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <Form onSubmit={this.handleEdit} method="post" encType="multipart/form-data" className="form-horizontal">
                    <ModalHeader toggle={() => this.toggleEdit(this.state.vehicle_id)}>Edit Data Parkir</ModalHeader>
                    <ModalBody className="mt-4 mx-4">
                      <FormGroup row>
                        <Col md="3">
                          No Kendaraan
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="vehicle_id" value={this.state.focus.vehicle_id} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Gedung
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="parking_name" value={this.state.focus.parking_name} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Slot Parkir
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="parking_slot" value={this.state.focus.parking_slot} required />
                        </Col>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                      <Button color="primary" type="submit" >Save Changes</Button>{' '}
                      <Button color="secondary" onClick={() => this.toggleEdit(this.state.vehicle_id)}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(this.state.vehicle_id)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(this.state.vehicle_id)}>Delete Data Parkir</ModalHeader>
                  <ModalBody>
                    Do you really want to delete this parking data?
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="danger" onClick={() => this.handleDelete(this.state.data[this.state.vehicle_id].vehicle_id)}>Delete</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleDelete(this.state.vehicle_id)}>Cancel</Button>
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

export default Parkir;