import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserInfo = ({ Username, Email }) => {
  
  return (
    <Row>
      <Col>
        <h2>User Info</h2>  
        <div>
        <span>Username: </span>
        <span>{Username}</span>
        </div>
        <div>
        <span>Email: </span>/
        <span>{Email}</span>
        </div>
      </Col>
    </Row>
  );
};