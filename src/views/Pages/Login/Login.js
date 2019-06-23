import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AuthService from '../../../server/AuthService';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      email: '',
      password: '',
      isAlertVisible: false,
      isLoggedin: false,
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
    console.log(event.target.value)
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
          <div className="position-absolute w-100 text-right">
            <Link to='/admin/login' className="text-light">Admin Login</Link>
          </div>
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
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <Form method="post" onSubmit={this.handleFormSubmit}>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="E-mail" autoComplete="email" name="email" onChange={this.handleChange} />
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.handleChange} />
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4">Login</Button>
                            </Col>
                            <Col xs="6" className="text-right">
                              <Button color="link" className="px-0">Forgot password?</Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                      <CardBody className="text-center">
                        <div>
                          <h2>Sign up</h2>
                          <p>Register first if you don't have accont yet.</p>
                          <Link to="/register">
                            <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                          </Link>
                        </div>
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

export default Login;
