import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import AuthService from '../../server/AuthService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      window.location = '/login';
    }
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
    console.log(this.Auth.getProfile())
    const profile = this.Auth.getProfile();
    if (profile.user_type === "Admin") {
      // var status = res.data[0].status === '1' ? 'Verified' : 'Not verified';
      this.setState({
        data: [{
          ID: profile.id,
          Name: profile.name,
          Email: profile.email,
          // Phone: profile.phone,
          Citizen_ID: profile.citizen_id,
          // Gender: profile.gender,
          // Address: profile.address,
          // Status: status,
          Previledge_ID: profile.previledge_id,
          Registered: profile.created,
          Updated: profile.updated
        }]
      });
    } else if (profile.user_type === "User") {
      var status = profile.status === '1' ? 'Verified' : 'Not verified';
      this.setState({
        data: [{
          ID: profile.id,
          Name: profile.name,
          Email: profile.email,
          Phone: profile.phone,
          Citizen_ID: profile.citizen_id,
          Gender: profile.gender,
          Address: profile.address,
          Status: status,
          // Previledge_ID: profile.previledge_id,
          Registered: profile.created,
          Updated: profile.updated
        }]
      })
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