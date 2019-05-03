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
      isLoggedin: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('id_token')) {
      this.setState({
        isLoggedin: true
      })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
                        <i className="icon-check" style={{ position: 'absolute' }}></i>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <i className="icon-check" style={{ position: 'absolute' }}></i>
                        <Input type="text" placeholder="Email" autoComplete="email" name="email" onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <i className="icon-check" style={{ position: 'absolute' }}></i>
                        <Input type="password" placeholder="Password" autoComplete="new-password" name="password" onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <i className="icon-check" style={{ position: 'absolute' }}></i>
                        <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                      </InputGroup>
                      <Button color="success" block type="submit">Create Account</Button>
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
