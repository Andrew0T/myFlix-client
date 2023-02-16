import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserInfo = ({ name, email }) => {
  
  return (
    <Row>
      <Col>
        <h2>User Info</h2>  
        <p>Username: {name}</p>
        <p>Email: {email}</p>
      </Col>
    </Row>
  );
};