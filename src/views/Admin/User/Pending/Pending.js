import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class Pending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: false,
      edit: false,
      delete: false,
      data: [{
        name: '',
        email: '',
        phone: '',
        citizen_id: '',
        gender: '',
        address: '',
      }],
      focus: [{
        owner: '',
        vehicle_id: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
      }]
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/user')
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
      axios.put(localStorage.getItem('serverAPI') + '/user/' + id, this.state.focus)
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
      axios.delete(localStorage.getItem('serverAPI') + '/user/' + id)
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
          label: 'ID',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Nama',
          field: 'name',
          sort: 'asc'
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc'
        },
        {
          label: 'Phone',
          field: 'phone',
          sort: 'asc'
        },
        {
          label: 'No KTP',
          field: 'citizen_id',
          sort: 'asc'
        },
        {
          label: 'Gender',
          field: 'gender',
          sort: 'asc'
        },
        {
          label: 'Alamat',
          field: 'address',
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
      if (items.status === "0") {
        rows.push({
          id: items.id,
          name: items.name,
          email: items.email,
          phone: items.phone,
          citizen_id: items.citizen_id,
          gender: items.gender,
          address: items.address,
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
                <i className="fa fa-align-justify"></i><strong>Data User Pending</strong>
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
                  <ModalHeader toggle={() => this.toggleView(0)}>Data User</ModalHeader>
                  <ModalBody className="modal-body-display">
                    <Col sm="12" lg="5" className="m-auto">
                      <Row>
                        <Col xs="3">Nama</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.name}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Email</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.email}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Phone</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.phone}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">No KTP</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.citizen_id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Gender</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.gender}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Alamat</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.address}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                    <Col sm="12" lg="7" className="m-auto">
                      <img className="d-block w-100" src='/assets/guide/zhiyong-li-24s.jpg' alt='KTP' />
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggleView(0)}>Close</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(0)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleEdit(0)}>Edit User</ModalHeader>
                  <ModalBody className="mt-4 mx-4">
                    <Form action="" method="post" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-email">Nama</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="name" value={this.state.focus.name} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Email</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="email" value={this.state.focus.email} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Phone</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="phone" value={this.state.focus.phone} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">No KTP</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="citizen_id" value={this.state.focus.citizen_id} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Gender</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="gender" value={this.state.focus.gender} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Alamat</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="address" value={this.state.focus.address} />
                        </Col>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => this.handleEdit(this.state.focus.id)}>Save Changes</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleEdit(0)}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(0)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(0)}>Delete User</ModalHeader>
                  <ModalBody>
                    Do you really want to delete this user?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={() => this.handleDelete(this.state.focus.id)}>Delete</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleDelete(0)}>Cancel</Button>
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

export default Pending;