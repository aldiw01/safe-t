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
      isLoggedin: false,
      isPasswordConfirmed: false,
      isRegisteredEmail: false,
      isGoodName: false,
      isGoodPassword: false
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
  }

  handleConfirmPassword = (event) => {
    if ((this.state.password === event.target.value) && (event.target.value.length > 5)) {
      this.setState({ isPasswordConfirmed: true });
    } else {
      this.setState({ isPasswordConfirmed: false });
    }
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
                        {this.state.isGoodName ?
                          <i className="icon-check" style={{ position: 'absolute' }}></i> :
                          <i className="icon-close" style={{ position: 'absolute' }}></i>}
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" onChange={this.handleCheckUsername} required />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        {!this.state.isRegisteredEmail && this.state.email !== '' ?
                          <i className="icon-check" style={{ position: 'absolute' }}></i> :
                          <i className="icon-close" style={{ position: 'absolute' }}></i>}
                        <Input type="email" placeholder="Email" autoComplete="email" name="email" onChange={this.handleChangeAndCheckEmail} required />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        {this.state.isGoodPassword ?
                          <i className="icon-check" style={{ position: 'absolute' }}></i> :
                          <i className="icon-close" style={{ position: 'absolute' }}></i>}
                        <Input type="password" placeholder="Password" autoComplete="new-password" name="password" onChange={this.handleCheckPassword} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        {this.state.isPasswordConfirmed ?
                          <i className="icon-check" style={{ position: 'absolute' }}></i> :
                          <i className="icon-close" style={{ position: 'absolute' }}></i>}
                        <Input type="password" placeholder="Repeat password" autoComplete="new-password" onChange={this.handleConfirmPassword} required />
                      </InputGroup>
                      <Button color="success" block type="submit" disabled={!this.state.isGoodName || !this.state.isGoodPassword || this.state.isRegisteredEmail || !this.state.isPasswordConfirmed} >Create Account</Button>
                    </Form>
                  </CardBody>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Register;
