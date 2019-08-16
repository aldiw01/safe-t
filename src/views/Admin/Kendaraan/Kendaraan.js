import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../server/AuthService';
import Spinner from 'react-spinkit';

class Kendaraan extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/admin/login';
    }
    this.state = {
      id: '',
      view: false,
      edit: false,
      delete: false,
      loader: false,
      data: [{
        id: '',
        owner: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
        created: '',
        updated: ''
      }],
      focus: [{
        id: '',
        owner: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
        created: '',
        updated: ''
      }]
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("getData")
    axios.get(localStorage.getItem('serverAPI') + '/vehicle')
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

  handleEdit = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      console.log(id)
      console.log(this.state.focus)
      axios.put(localStorage.getItem('serverAPI') + '/vehicle/' + id, this.state.focus)
        .then(res => {
          this.setState({
            edit: !this.state.edit,
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

  handleDelete = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      console.log(id)
      console.log(this.state.focus)
      axios.delete(localStorage.getItem('serverAPI') + '/vehicle/' + id)
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

  toggleView = id => {
    this.setState({
      id: id,
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  toggleEdit = id => {
    this.setState({
      id: id,
      edit: !this.state.edit,
      focus: this.state.data[id]
    });
  }

  toggleDelete = id => {
    this.setState({
      id: id,
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
          label: 'No Kendaraan',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Owner',
          field: 'owner',
          sort: 'asc'
        },
        {
          label: 'Merk',
          field: 'brand',
          sort: 'asc'
        },
        {
          label: 'Jenis',
          field: 'type',
          sort: 'asc'
        },
        {
          label: 'Tahun Pembuatan',
          field: 'build_year',
          sort: 'asc'
        },
        {
          label: 'Warna',
          field: 'color',
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
    let toggleEdit = this.toggleEdit;
    let toggleDelete = this.toggleDelete;
    data.rows.forEach(function (items, i) {
      if (items.id !== '') {
        rows.push({
          id: items.id,
          owner: items.owner,
          brand: items.brand,
          type: items.type,
          build_year: items.build_year,
          color: items.color,
          actions: <React.Fragment>
            <button title="View Data" className="px-3 py-1 mr-1 btn btn-primary" onClick={() => toggleView(i)}><i className="fa fa-search"></i></button>
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
                <i className="fa fa-align-justify"></i><strong>Data Kendaraan</strong>
              </CardHeader>
              <CardBody>
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={dataFix}
                // paginationLabel={["<", ">"]}
                />

                <Modal isOpen={this.state.view} toggle={() => this.toggleView(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleView(this.state.id)}>Data Kendaraan</ModalHeader>
                  <ModalBody className="modal-body-display">
                    <Col sm="12" lg="5" className="m-auto">
                      <Row>
                        <Col xs="5">No Kendaraan</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Owner</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.owner}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Merk</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.brand}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Jenis</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.type}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Tahun Pembuatan</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.build_year}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Warna</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.color}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Created</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.created).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="5">Updated</Col>
                        <Col xs="7" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.updated).toLocaleString('en-GB')}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                    <Col sm="12" lg="7" className="m-auto">
                      <img className="d-block w-100" src='/assets/guide/test.jpg' alt='KTP' />
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggleView(this.state.id)}>Close</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleEdit(this.state.id)}>Edit Kendaraan</ModalHeader>
                  <ModalBody className="mt-4 mx-4">
                    <Form action="" method="post" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-email">No Kendaraan</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="id" value={this.state.focus.id} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-email">Owner</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="owner" value={this.state.focus.owner} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Merk</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="brand" value={this.state.focus.brand} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Jenis</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="type" value={this.state.focus.type} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Tahun Pembuatan</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="build_year" value={this.state.focus.build_year} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Warna</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="color" value={this.state.focus.color} />
                        </Col>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="primary" onClick={() => this.handleEdit(this.state.data[this.state.id].id)}>Save Changes</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleEdit(this.state.id)}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(this.state.id)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(this.state.id)}>Delete Kendaraan</ModalHeader>
                  <ModalBody>
                    Do you really want to delete this vehicle?
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

export default Kendaraan;