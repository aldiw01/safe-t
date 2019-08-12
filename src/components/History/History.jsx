import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from 'reactstrap';

class History extends Component {
  render() {
    return (
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <i className="fa fa-history"></i><strong>Ticket History</strong>
            </CardHeader>
            <CardBody>
              <ListGroup>
                {this.props.history[0].id ?
                  this.props.history.map(item =>
                    <ListGroupItem action key={item.id}>
                      <div className="d-flex w-100 justify-content-between">
                        <ListGroupItemHeading>{item.from_name}</ListGroupItemHeading>
                        <small>{new Date(item.created).toLocaleString('en-GB')}</small>
                      </div>
                      <ListGroupItemText>
                        {item.from_name + " " + item.info + " : "}
                        <span className="font-weight-bold">{item.message}</span>
                      </ListGroupItemText>
                    </ListGroupItem>
                  ) : "No record found"
                }
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default History;