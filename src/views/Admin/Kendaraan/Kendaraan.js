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
      add: false,
      view: false,
      edit: false,
      delete: false,
      loader: false,
      fileImage: '',
      data: [{
        id: '',
        owner: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
        documentation: '',
        created: '',
        updated: ''
      }],
      focus: {
        id: '',
        owner: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
        documentation: '',
        created: '',
        updated: ''
      },
      new: {
        id: '',
        owner: '',
        brand: '',
        type: '',
        build_year: '',
        color: '',
        fileImage: ''
      }
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/vehicle')
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

  handleChangeNewFile = (event) => {
    this.setState({
      new: {
        ...this.state.new,
        [event.target.name]: event.target.files[0]
      }
    })
  }

  handleChangeEditFile = (event) => {
    this.setState({
      fileImage: event.target.files[0]
    })
  }

  handleAdd = (event) => {
    event.preventDefault();
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      const data = new FormData();
      data.append('id', this.state.new.id);
      data.append('owner', this.state.new.owner);
      data.append('brand', this.state.new.brand);
      data.append('type', this.state.new.type);
      data.append('build_year', this.state.new.build_year);
      data.append('color', this.state.new.color);
      data.append('fileImage', this.state.fileImage);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      axios.post(localStorage.getItem('serverAPI') + '/vehicle', data, config)
        .then(res => {
          this.setState({
            add: !this.state.add,
            loader: false,
            new: {
              id: '',
              owner: '',
              brand: '',
              type: '',
              build_year: '',
              color: '',
              fileImage: ''
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
      const data = new FormData();
      data.append('id', this.state.focus.id);
      data.append('owner', this.state.focus.owner);
      data.append('brand', this.state.focus.brand);
      data.append('type', this.state.focus.type);
      data.append('build_year', this.state.focus.build_year);
      data.append('color', this.state.focus.color);
      data.append('fileImage', this.state.fileImage);
      axios.put(localStorage.getItem('serverAPI') + '/vehicle/' + this.state.data[this.state.id].id, data)
        .then(res => {
          this.setState({
            edit: !this.state.edit,
            loader: false,
            fileImage: ''
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

  toggleAdd = () => {
    this.setState({
      add: !this.state.add,
    });
  }

  toggleView = (id) => {
    this.setState({
      id: id,
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  toggleEdit = (id) => {
    this.setState({
      id: id,
      edit: !this.state.edit,
      focus: this.state.data[id]
    });
  }

  toggleDelete = (id) => {
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
                    <ModalHeader toggle={this.toggleAdd}>Kendaraan Baru</ModalHeader>
                    <ModalBody className="mt-4 mx-4">
                      <FormGroup row>
                        <Col md="3">
                          No Kendaraan
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="id" value={this.state.new.id} className="text-uppercase" required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Owner
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="owner" value={this.state.new.owner} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Merk
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="brand" value={this.state.new.brand} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Jenis
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="type" value={this.state.new.type} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Tahun Pembuatan
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="number" onChange={this.handleChangeNew} name="build_year" value={this.state.new.build_year} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Warna
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChangeNew} name="color" value={this.state.new.color} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Dokumentasi
                        </Col>
                        <Col xs="12" md="9">
                          <div className="custom-file">
                            <Input type="file" className="custom-file-input" name="fileImage" onChange={this.handleChangeNewFile} required />
                            <Label className="custom-file-label" htmlFor="customFileLang" style={{ overflow: "hidden" }} >{this.state.new.fileImage ? this.state.new.fileImage.name : ""} </Label>
                          </div>
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
                      <img className="d-block w-100" src={process.env.REACT_APP_API_PATH + '/image/vehicle/' + this.state.focus.documentation} alt='Kendaraan' />
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggleView(this.state.id)}>Close</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <Form onSubmit={this.handleEdit} method="post" encType="multipart/form-data" className="form-horizontal">
                    <ModalHeader toggle={() => this.toggleEdit(this.state.id)}>Edit Kendaraan</ModalHeader>
                    <ModalBody className="mt-4 mx-4">
                      <FormGroup row>
                        <Col md="3">
                          No Kendaraan
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="id" value={this.state.focus.id} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Owner
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="owner" value={this.state.focus.owner} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Merk
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="brand" value={this.state.focus.brand} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Jenis
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="type" value={this.state.focus.type} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Tahun Pembuatan
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="build_year" value={this.state.focus.build_year} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Warna
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="color" value={this.state.focus.color} required />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          Dokumentasi
                        </Col>
                        <Col xs="12" md="9">
                          <div className="custom-file">
                            <Input type="file" className="custom-file-input" name="documentation" onChange={this.handleChangeEditFile} />
                            <Label className="custom-file-label" htmlFor="customFileLang" style={{ overflow: "hidden" }} >{this.state.fileImage ? this.state.fileImage.name : ""} </Label>
                          </div>
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