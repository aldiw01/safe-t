import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      KTP: '',
      CaptureKTP: '',
      isLoggedin: false,
      isPasswordConfirmed: false,
      isRegisteredEmail: false,
      isGoodName: false,
      isGoodEmail: false,
      isGoodPassword: false,
      isGoodKTP: false,
      isEmailClicked: false,
      isNameClicked: false,
      isPasswordClicked: false,
      isKTPClicked: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('id_token')) {
      this.setState({
        isLoggedin: true
      })
    }
  }

  handleCheckUsername = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value.length)
    if (event.target.value.length > 5) {
      this.setState({
        isGoodName: true
      })
    } else {
      this.setState({
        isGoodName: false
      })
    }
  }

  handleCheckPassword = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value.length)
    if (event.target.value.length > 5) {
      this.setState({
        isGoodPassword: true
      })
    } else {
      this.setState({
        isGoodPassword: false
      })
    }
  }

  handleChangeAndCheckEmail = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    let validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(validate.test(event.target.value))
    if (validate.test(event.target.value)) {
      this.setState({
        isGoodEmail: true
      })
      const data = new FormData()

      data.append("email", event.target.value)
      axios.post(localStorage.getItem('serverAPI') + '/cekRegistered', data, {
      }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          this.setState({ isRegisteredEmail: true });
        } else {
          this.setState({ isRegisteredEmail: false });
        }
      });
    } else {
      this.setState({
        isGoodEmail: false
      })
    }
  }

  handleConfirmPassword = (event) => {
    if ((this.state.password === event.target.value) && (event.target.value.length > 5)) {
      this.setState({ isPasswordConfirmed: true });
    } else {
      this.setState({ isPasswordConfirmed: false });
    }
  }

  handleCheckKTP = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value.length)
    if (event.target.value.length == 16 && !isNaN(event.target.value)) {
      this.setState({
        isGoodKTP: true
      })
    } else {
      this.setState({
        isGoodKTP: false
      })
    }
  }

  handleCheckCaptureKTP = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(localStorage.getItem('serverAPI') + '/admin', this.state)
      .then(res => {
        if (res.data.success) {
          alert('Account registered successfully. Please check your e-mail to activate your account.');
          window.location.reload();
        } else {
          alert('Register failed, please try again later');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      this.state.isLoggedin ? <Redirect to="/dashboard" /> :
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Full Name" autoComplete="username" name="username" className={!this.state.isNameClicked ? "" : this.state.isGoodName ? "is-valid" : "is-invalid"} onFocus={() => this.setState({ isNameClicked: true })} onChange={this.handleCheckUsername} required />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" autoComplete="email" name="email" className={!this.state.isEmailClicked ? "" : this.state.isGoodEmail && !this.state.isRegisteredEmail ? "is-valid" : "is-invalid"} onFocus={() => this.setState({ isEmailClicked: true })} onChange={this.handleChangeAndCheckEmail} required />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="new-password" name="password" className={!this.state.isPasswordClicked ? "" : this.state.isGoodPassword ? "is-valid" : "is-invalid"} onFocus={() => this.setState({ isPasswordClicked: true })} onChange={this.handleCheckPassword} required />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Repeat password" autoComplete="new-password" className={!this.state.isPasswordClicked ? "" : this.state.isPasswordConfirmed ? "is-valid" : "is-invalid"} onChange={this.handleConfirmPassword} required />
                      </InputGroup>
                      <InputGroup className="mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-id-card-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="No. KTP" name="KTP" className={!this.state.isKTPClicked ? "" : this.state.isGoodKTP ? "is-valid" : "is-invalid"} onFocus={() => this.setState({ isKTPClicked: true })} onChange={this.handleCheckKTP} required />
                      </InputGroup>
                      <InputGroup className="mb-4 input-group border rounded p-1">
                        <Input type="file" id="file-input" name="CaptureKTP" required onChange={this.handleCheckCaptureKTP} />
                      </InputGroup>
                      <Button color="success" block type="submit" disabled={!this.state.isGoodName || !this.state.isGoodPassword || this.state.isRegisteredEmail || !this.state.isPasswordConfirmed || !this.state.isGoodKTP || !this.state.CaptureKTP} >Create Account</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Register;
