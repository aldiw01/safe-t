import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import AuthService from '../../server/AuthService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      data: [{
        id: '',
        name: '',
        email: '',
        phone: '',
        citizen_id: '',
        captured_id: '',
        gender: '',
        address: '',
        status: '',
        created: '',
        updated: ''
      }]
    }
  }

  componentDidMount() {
    if (this.Auth.getProfile().user_type === "Admin") {
      axios.get(localStorage.getItem('serverAPI') + '/admin/' + this.Auth.getProfile().id)
        .then(res => {
          // var status = res.data[0].status === '1' ? 'Verified' : 'Not verified';
          this.setState({
            data: [{
              ID: res.data[0].id,
              Name: res.data[0].name,
              Email: res.data[0].email,
              Phone: res.data[0].phone,
              Citizen_ID: res.data[0].citizen_id,
              // Gender: res.data[0].gender,
              // Address: res.data[0].address,
              // Status: status,
              Previledge_ID: res.data[0].previledge_id,
              Registered: res.data[0].created,
              Updated: res.data[0].updated
            }]
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.Auth.getProfile().user_type === "User") {
      axios.get(localStorage.getItem('serverAPI') + '/user/' + this.Auth.getProfile().id)
        .then(res => {
          var status = res.data[0].status === '1' ? 'Verified' : 'Not verified';
          this.setState({
            data: [{
              ID: res.data[0].id,
              Name: res.data[0].name,
              Email: res.data[0].email,
              Phone: res.data[0].phone,
              Citizen_ID: res.data[0].citizen_id,
              Gender: res.data[0].gender,
              Address: res.data[0].address,
              Status: status,
              // Previledge_ID: res.data[0].previledge_id,
              Registered: res.data[0].created,
              Updated: res.data[0].updated
            }]
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const user = this.state.data[0];
    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.state.data[0].ID}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {
                      userDetails.map(([key, value]) => {
                        return (
                          <tr key={key}>
                            <td>{`${key}:`}</td>
                            <td><strong>{value}</strong></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Profile;
