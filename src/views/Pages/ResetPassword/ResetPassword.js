import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AuthService from '../../../server/AuthService';
import axios from 'axios';

class ResetPassword extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      password: '',
      passwordVal: '',
      isAlertVisible: false,
      isGoodPassword: false,
      isLoggedin: false,
      isPasswordConfirmed: false,
      message: ''
    }
  }

  componentDidMount() {
    if (this.Auth.loggedIn()) {
      this.setState({
        isLoggedin: true
      })
    }
    if (this.props.match.params.id !== undefined) {
      const req = {
        token: this.props.match.params.id
      };
      axios.post(localStorage.getItem('serverAPI') + '/user/verify-token', req, {
      }).then(res => {
        this.setState({
          isAlertVisible: res.data.success,
          message: res.data.message
        });
      });
    }
  }

  onDismiss = () => {
    this.setState({ isAlertVisible: false });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckPassword = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    if (event.target.value.length > 5) {
      this.setState({
        isGoodPassword: true
      })
    } else {
      this.setState({
        isGoodPassword: false
      })
    }

    if ((event.target.value === this.state.passwordVal) && (event.target.value.length > 5)) {
      this.setState({ isPasswordConfirmed: true });
    } else {
      this.setState({ isPasswordConfirmed: false });
    }
  }

  handleConfirmPassword = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    if ((this.state.password === event.target.value) && (event.target.value.length > 5)) {
      this.setState({ isPasswordConfirmed: true });
    } else {
      this.setState({ isPasswordConfirmed: false });
    }
  }

  handleFormSubmit = (event) => {
    this.setState({ loader: true });
    event.preventDefault();
    this.Auth.loginUser(this.state.email, this.state.password)
      .then(res => {
        if (res.data.success) {
          this.setState({ loader: false });
          window.location.href = '/dashboard';
        } else {
          this.setState({ loader: false });
          alert(res.data.err);
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      })
  }

  render() {
    return (
      this.state.isLoggedin ? <Redirect to="/dashboard" /> :
        <React.Fragment>
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="w-75 m-auto">
                <Col xs="12">
                  <Alert color="info" isOpen={this.state.isAlertVisible} toggle={this.onDismiss}>
                    {this.state.message}
                  </Alert>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <Form method="post" onSubmit={this.handleFormSubmit}>
                          <h1>Reset Password</h1>
                          <p className="text-muted">Enter new password for your account.</p>

                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" autoComplete="new-password" name="password" value={this.state.password} className={!this.state.isPasswordClicked ? "" : this.state.isGoodPassword ? "is-valid" : "is-invalid"} onFocus={() => this.setState({ isPasswordClicked: true })} onChange={this.handleCheckPassword} required />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Repeat password" autoComplete="new-password" name="passwordVal" value={this.state.passwordVal} className={!this.state.isPasswordClicked ? "" : this.state.isPasswordConfirmed ? "is-valid" : "is-invalid"} onChange={this.handleConfirmPassword} required />
                          </InputGroup>

                          <Row>
                            <Col className="d-flex justify-content-center">
                              <Button color="primary" className="px-4" disabled={!this.state.isGoodPassword || !this.state.isPasswordConfirmed}>Set Password</Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </CardGroup>
                  <Card>
                    <CardFooter>
                      <span className="float-right"><a href="mailto:imvlaboratory@gmail.com" target="_blank" rel="noopener noreferrer">Safe-T</a> &copy; {new Date().getFullYear()} IMV Laboratory</span>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
    );
  }
}

export default ResetPassword;
