import React from "react";
import {Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UpdateUser = ({ handleUpdate }) => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState("");
    
    const data = {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday
        };

        fetch(`https://myflixdb-202302.herokuapp.com/users/:Username`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Update successful");
        window.location.reload();
      } else {
        alert("Sorry something is incorrect?");
      }
    });
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>Update Profile</Card.Title>
          <Form onSubmit={(e) => handleUpdate(e)}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username: </Form.Label>
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
              <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="8"
                  placeholder="Your password must have 8 or more characters"
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Please enter your email address"
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday: </Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                  placeholder="Please enter your birth date"
                />
            </Form.Group>
            <Link>
            <Button variant="warning" type="submit">
            Save changes?
            </Button>
            </Link>
        </Form>
      </Card.Body>
    </Card>
  );
};
