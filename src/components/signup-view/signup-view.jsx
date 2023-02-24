import React from "react";
import { useState } from "react";
import {Button, Form, Card, CardGroup, Container, Row, Col} from "react-bootstrap";

export const SignupView = () => {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  const [email, setEmail] = useState ("");
  const [birthday, setBirthday] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch(`https://myflixdb-202302.herokuapp.com/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Please Register</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                        <Form.Control
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          minLength="3"
                          placeholder="Please enter a username"
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
                          placeholder="Your password must have 6 or more characters"
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Please enter your email address"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                      <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                          type="date"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                          required
                          placeholder="Please enter your birth date"
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                      Submit
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
