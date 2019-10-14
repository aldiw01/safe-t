import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../server/AuthService';
import Spinner from 'react-spinkit';

class Lokasi extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/admin/login';
    }
    this.state = {
      id: '',
      add: false,
      edit: false,
      delete: false,
      loader: false,
      data: [{
        id: '',
        parking_name: '',
        max_slot: ''
      }],
      focus: {
        id: '',
        parking_name: '',
        max_slot: ''
      },
      new: {
        id: '',
        parking_name: '',
        max_slot: ''
      }
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/parking/lokasi')
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

  handleChangeNew = (event) => {
    this.setState({
      new: {
        ...this.state.new,
        [event.target.name]: event.target.value
      }
    })
  }

  handleAdd = (event) => {
    event.preventDefault();
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      const data = new FormData();
      data.append('parking_name', this.state.new.parking_name);
      data.append('max_slot', this.state.new.max_slot);
      axios.post(localStorage.getItem('serverAPI') + '/parking/lokasi/add', data)
        .then(res => {
          this.setState({
            add: !this.state.add,
            loader: false,
            new: {
              parking_name: '',
              max_slot: '',
            }
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

  handleEdit = (event) => {
    event.preventDefault();
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      const req = {
        parking_name: this.state.focus.parking_name,
        max_slot: this.state.focus.max_slot,
      }
      axios.put(localStorage.getItem('serverAPI') + '/parking/lokasi/update/' + this.state.data[this.state.id].id, req)
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

  handleDelete = (id) => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      axios.delete(localStorage.getItem('serverAPI') + '/parking/lokasi/close/' + id)
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

  toggleAdd = () => {
    this.setState({
      add: !this.state.add,
    });
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
          label: 'ID Lokasi',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Lokasi',
          field: 'parking_name',
          sort: 'asc'
        },
        {
          label: 'Maximum Slot Parkir',
          field: 'max_slot',
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
      if (items.id !== '') {
        rows.push({
          id: items.id,
          parking_name: items.parking_name,
          max_slot: items.max_slot,
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
                <Button color="success" className="float-right" onClick={this.toggleAdd}>
                  Tambah{' '}
                  <i className="fa fa-plus"></i>
                </Button>
              </CardHeader>
              <CardBody>
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={dataFix}
                // paginationLabel={["<", ">"]}
                />

                <Modal isOpen={this.state.add} toggle={this.toggleAdd} className={'modal-success modal-lg ' + this.props.className}>
                  <Form onSubmit={this.handleAdd} method="post" encType="multipart/form-data" className="form-horizontal">
                    <ModalHeader toggle={this.toggleAdd}>Lokasi Parkir Baru</ModalHeader>
                    <ModalBody className="mt-4 mx-4">
                      <FormGroup row>
                        <Col md="3">
                          Lokasi Parkir
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="parking_name" value={this.state.new.parking_name} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Maximum Slot Parkir
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="max_slot" value={this.state.new.max_slot} required />
                        </Col>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                      <Button color="success" type="submit" >Tambah</Button>{' '}
                      <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <Form onSubmit={this.handleEdit} method="post" encType="multipart/form-data" className="form-horizontal">
                    <ModalHeader toggle={() => this.toggleEdit(this.state.id)}>Edit Data Parkir</ModalHeader>
                    <ModalBody className="mt-4 mx-4">
                      <FormGroup row>
                        <Col md="3">
                          Lokasi Parkir
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="parking_name" value={this.state.focus.parking_name} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Maximum Slot Parkir
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="max_slot" value={this.state.focus.max_slot} required />
                        </Col>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                      <Button color="primary" type="submit" >Save Changes</Button>{' '}
                      <Button color="secondary" onClick={() => this.toggleEdit(this.state.id)}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(this.state.id)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(this.state.id)}>Delete Data Parkir</ModalHeader>
                  <ModalBody>
                    Do you really want to delete this location parking data?
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="danger" onClick={() => this.handleDelete(this.state.data[this.state.id].id)}>Delete</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleDelete(this.state.id)}>Cancel</Button>
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

export default Lokasi;