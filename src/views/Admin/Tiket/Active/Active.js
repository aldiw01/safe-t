import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../../server/AuthService';

class Active extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/admin/login';
    }
    this.state = {
      view: false,
      edit: false,
      delete: false,
      message: '',
      data: [{
        id: '',
        reporter_id: '',
        violator_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
      }],
      focus: {
        id: '',
        reporter_id: '',
        violator_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
      }
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket')
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
    });
  }

  handleChangeEvent = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEdit = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      axios.put(localStorage.getItem('serverAPI') + '/ticket/' + id, this.state.focus)
        .then(res => {
          this.setState({
            edit: !this.state.edit,
          })
          alert(res.data.message);
          this.getData();
        })
        .catch(error => {
          alert(error);
        });
    }
  }

  handleDelete = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      axios.delete(localStorage.getItem('serverAPI') + '/ticket/' + id)
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

  handleCloseTicket = () => {
    var message = "You will close this ticket. Are you sure?";
    if (Object.values(this.state.focus).includes("")) {
      message = "You still have empty field(s), consider to fill it first.\n" + message;
    }
    if (window.confirm(message)) {
      const req = {
        ticket_id: this.state.focus.id,
        from_id: this.Auth.getProfile().id,
        to_id: this.state.focus.reporter_id,
        info: "telah menutup status tiket anda",
        message: this.state.message
      }
      axios.post(localStorage.getItem('serverAPI') + '/history', req)
        .catch(error => {
          alert(error);
        });

      axios.put(localStorage.getItem('serverAPI') + '/ticket/close/' + this.state.focus.id)
        .then(res => {
          this.setState({
            view: !this.state.view,
          })
          alert(res.data.message);
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
      focus: this.state.data[id],
      message: ''
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
          label: 'Detail',
          field: 'detail',
          sort: 'asc'
        },
        {
          label: 'Tanggal',
          field: 'incident_date',
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
          id: parseInt(items.id),
          reporter_id: items.reporter_id,
          violator_id: items.violator_id,
          vehicle_id: items.vehicle_id,
          violation_type: items.violation_type,
          detail: items.detail,
          incident_date: items.incident_date,
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
                <i className="fa fa-align-justify"></i><strong>Data Tiket Aktif</strong>
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
                        <Col xs="3">Tanggal Pelanggaran</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.incident_date}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Status</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>Aktif</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Created</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.created}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Updated</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.updated}</Col>
                        <div className="w-100 py-2"></div>
                      </Row>
                    </Col>
                    <Col sm="12" lg="12" className="m-auto">
                      <img className="d-block w-100" src={localStorage.getItem('serverAPI') + '/uploads/ticket/' + this.state.focus.documentation} alt='Ticket' />

                      <textarea name="message" value={this.state.message} onChange={this.handleChangeEvent} className="form-control mt-3 border-primary" rows="2" placeholder="Mohon isi respon untuk menutup tiket"></textarea>
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.handleCloseTicket} disabled={this.state.message === ""}>Close Ticket</Button>
                    <Button color="secondary" onClick={() => this.toggleView(0)}>Close</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(0)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleEdit(0)}>Review Tiket</ModalHeader>
                  <ModalBody className="mt-4 mx-4">
                    <Form action="" method="post" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-email">Reporter ID</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="reporter_id" value={this.state.focus.reporter_id} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Violator ID</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="violator_id" value={this.state.focus.violator_id} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">No Kendaraan</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="vehicle_id" value={this.state.focus.vehicle_id} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Jenis Pelanggaran</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="violation_type" value={this.state.focus.violation_type} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Detail</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="detail" value={this.state.focus.detail} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="hf-username">Tanggal Pelanggaran</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" onChange={this.handleChange} name="incident_date" value={this.state.focus.incident_date} />
                        </Col>
                      </FormGroup>
                    </Form>
                    <img className="d-block w-100" src={localStorage.getItem('serverAPI') + '/uploads/ticket/' + this.state.focus.documentation} alt='Ticket' />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => this.handleEdit(this.state.focus.id)}>Save Changes</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleEdit(0)}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(0)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(0)}>Delete Tiket</ModalHeader>
                  <ModalBody>
                    Do you really want to delete this ticket?
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

export default Active;