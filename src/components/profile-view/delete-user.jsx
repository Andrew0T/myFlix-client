import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export const DeleteUser = () => {
  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const deleteUser = (e) => {
    e.preventDefault();

      fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    })
    .then((response) => response.json())
    .then((resJSON) => {
      alert('User account was successful deleted. Sorry to see you go.');
      console.log(resJSON);
      window.location.assign("/");
    })
    .catch((error) => {
      alert('Sorry, something went wrong' + error);
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Delete User</Card.Title>
          <Form onSubmit={deleteUser}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength="6"
                  placeholder="Please enter your username"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                  placeholder="Please enter your password"
                />
            </Form.Group>
            <Button              
              variant="danger"
              type="submit"
              onClick={deleteUser}
            >
            Delete user?
            </Button>
          </Form>
      </Card.Body>    
    </Card>
  );
};
