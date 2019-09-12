import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import AuthService from '../../../../server/AuthService';
import Spinner from 'react-spinkit';
import History from 'components/History/History';

class Active extends Component {

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
      message: '',
      loader: false,
      data: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
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
    axios.get(localStorage.getItem('serverAPI') + '/ticket/status/0')
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
      this.setState({ loader: true });
      const req = {
        ticket_id: this.state.focus.id,
        from_id: this.Auth.getProfile().id,
        to_id: this.state.focus.reporter_id,
        info: "telah mengubah tiket anda",
        message: this.state.message
      }
      axios.post(localStorage.getItem('serverAPI') + '/history', req)
        .catch(error => {
          alert(error);
        });

      axios.put(localStorage.getItem('serverAPI') + '/ticket/' + id, this.state.focus)
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
        });
    }
  }

  handleDelete = id => {
    if (window.confirm("You will create change(s) on database. Are you sure?")) {
      this.setState({ loader: true });
      const req = {
        ticket_id: this.state.focus.id,
        from_id: this.Auth.getProfile().id,
        to_id: this.state.focus.reporter_id,
        info: "telah mengarsipkan tiket anda",
        message: this.state.message
      }
      axios.post(localStorage.getItem('serverAPI') + '/history', req)
        .catch(error => {
          alert(error);
        });

      axios.delete(localStorage.getItem('serverAPI') + '/ticket/' + id)
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
        });
    }
  }

  handleCloseTicket = () => {
    var message = "You will close this ticket. Are you sure?";
    if (Object.values(this.state.focus).includes("")) {
      message = "You still have empty field(s), consider to fill it first.\n" + message;
    }
    if (window.confirm(message)) {
      this.setState({ loader: true });
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
            loader: false,
            view: !this.state.view,
          })
          console.log(res.data.message);
          alert(res.data.message);
          this.getData();
        })
        .catch(error => {
          alert(error);
        });
    }
  }

  toggleView = id => {
    if (id !== this.state.id) {
      axios.get(localStorage.getItem('serverAPI') + '/history/ticket/' + this.state.data[id].id)
        .then(res => {
          this.setState({ history: res.data });
        })
        .catch(error => {
          this.setState({
            history: [{
              id: '',
              ticket_id: '',
              from_name: '',
              info: '',
              message: '',
              status: '',
              violance_address: '',
              created: '',
              updated: '',
            }]
          });
        });
    }

    this.setState({
      id: id,
      view: !this.state.view,
      focus: this.state.data[id],
      message: ''
    });
  }

  toggleEdit = id => {
    this.setState({
      id: id,
      edit: !this.state.edit,
      focus: this.state.data[id],
      message: ''
    });
  }

  toggleDelete = id => {
    this.setState({
      id: id,
      delete: !this.state.delete,
      focus: this.state.data[id],
      message: ''
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
          label: 'Tanggal Pelanggaran',
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
      if (items.id) {
        rows.push({
          id: items.id,
          reporter_id: items.reporter_id,
          vehicle_id: items.vehicle_id,
          violation_type: items.violation_type,
          detail: items.detail,
          incident_date: new Date(items.incident_date).toLocaleDateString('en-GB'),
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

                <Modal isOpen={this.state.view} toggle={() => this.toggleView(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleView(this.state.id)}>Data Tiket</ModalHeader>
                  <ModalBody className="modal-body-display d-block">
                    <Col sm="12" lg="12" className="m-auto">
                      <Row>
                        <Col xs="3">ID</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.id}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Reporter ID</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.reporter_id}</Col>
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
                        <Col xs="3">TKP</Col>
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.violance_address}</Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="3">Tanggal Pelanggaran</Col>
                        {/* <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{this.state.focus.incident_date}</Col> */}
                        <Col xs="9" className="border-bottom mt-auto" style={viewStyle}>{new Date(this.state.focus.incident_date).toLocaleDateString('en-GB')}</Col>
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
                        <Col xs="12">
                          <img className="d-block w-100" src={process.env.REACT_APP_API_PATH + '/image/ticket/' + this.state.focus.documentation} alt='Ticket' />
                        </Col>
                        <div className="w-100 py-2"></div>
                        <Col xs="12">
                          <History history={this.state.history} />
                        </Col>
                        <Col xs="12">
                          <textarea name="message" value={this.state.message} onChange={this.handleChangeEvent} className="form-control border-primary" rows="2" placeholder="Mohon isi respon untuk menutup tiket"></textarea>
                        </Col>
                      </Row>
                    </Col>
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="primary" onClick={this.handleCloseTicket} disabled={this.state.loader || this.state.message === ""}>Close Ticket</Button>
                    <Button color="secondary" onClick={() => this.toggleView(this.state.id)}>Close</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.edit} toggle={() => this.toggleEdit(this.state.id)} className={'modal-primary modal-lg ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleEdit(this.state.id)}>Review Tiket</ModalHeader>
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
                          <Input type="date" onChange={this.handleChange} name="incident_date" value={this.state.focus.incident_date} />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="12">
                          <img className="d-block w-100" src={process.env.REACT_APP_API_PATH + '/image/ticket/' + this.state.focus.documentation} alt='Ticket' />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="12">
                          <textarea name="message" value={this.state.message} onChange={this.handleChangeEvent} className="form-control border-primary" rows="2" placeholder="Mohon isi respon untuk mengubah tiket"></textarea>
                        </Col>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="primary" onClick={() => this.handleEdit(this.state.focus.id)} disabled={this.state.loader || this.state.message === ""} >Save Changes</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggleEdit(this.state.id)}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.delete} toggle={() => this.toggleDelete(this.state.id)} className={'modal-danger modal-sm ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleDelete(this.state.id)}>Delete Tiket</ModalHeader>
                  <ModalBody>
                    Do you really want to reject this ticket?. Why?
                    <textarea name="message" value={this.state.message} onChange={this.handleChangeEvent} className="form-control border-primary mt-2" rows="2" placeholder="Mohon isi respon untuk mengarsipkan tiket"></textarea>
                  </ModalBody>
                  <ModalFooter>
                    {this.state.loader ? <Spinner name='double-bounce' fadeIn="quarter" /> : ""}
                    <Button color="danger" onClick={() => this.handleDelete(this.state.focus.id)} disabled={this.state.loader || this.state.message === ""} >Delete</Button>{' '}
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

export default Active;