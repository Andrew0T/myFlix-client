import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserInfo = ({ user, email }) => {
  
  return (
    <Row>
      <Col>
        <h2>User Info</h2>  
        <div>
        <span>Username: </span>
        <span>{user}</span>
        </div>
        <div>
        <span>Email: </span>
        <span>{email}</span>
        </div>
      </Col>
    </Row>
  );
};