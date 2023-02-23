import React from "react";
import { useState } from "react";
import {Button, Card, CardGroup, Col, Container, Form, Row} from "react-bootstrap";

export const DeleteUser = ({ deleteUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
      e.preventDefault();
    
  const data = {
    Username: username,
    Password: password
  };

    fetch(`https://myflixdb-202302.herokuapp.com/users/${storedUser.Username}`, {
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedToken}`
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          deleteUser(data.user, data.token);
        } else {
          alert("User successfully deleted. See you next time.");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  }

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Please Login</Card.Title>
                  <Form onSubmit={handleUpdate}>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                        <Form.Control
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          minLength="3"
                          placeholder="Please enter your username"
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password:</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          minLength="6"
                          placeholder="Please enter your password"
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                      Delete User
                    </Button>
                  </Form>
              </Card.Body>    
            </Card>
          </CardGroup>        
        </Col>
      </Row>
    </Container>
  );
};
