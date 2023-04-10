import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export const UpdateUser = () => {
  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));

  const [username, updateUsername] = useState ("");
  const [password, updatePassword] = useState ("");
  const [email, updateEmail] = useState ("");
  const [birthday, updateBirthday] = useState ("");
  
  const updateUser = (e) => {
    e.preventDefault();

    fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      }
    })
    .then((response) => response.json())
    .then((resJSON) => {
      alert('Successfully updated user information');
      console.log(resJSON);
      window.location.reload(" ");
    })
    .catch((error) => {
      console.log(error);
        alert('Sorry, something went wrong? Please try again!' + error);
    })
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Update Profile</Card.Title>
          <Form onSubmit={updateUser}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => updateUsername(e.target.value)}
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
                  onChange={(e) => updatePassword(e.target.value)}
                  required
                  minLength="6"
                  placeholder="Your password must have 6 or more characters"
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(e.target.value)}
                  required
                  placeholder="Please enter your email address"
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday: </Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => updateBirthday(e.target.value)}
                  required
                  placeholder="Please enter your birth date"
                />
            </Form.Group>
            <Button 
              variant="warning"
              type="submit"
              onClick={updateUser}
            >
              Update user
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
