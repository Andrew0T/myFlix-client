import { useState } from "react";
import {Button, Card, Form } from "react-bootstrap";

export const UpdateUser = ({ storedtoken }) => {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  const [email, setEmail] = useState ("");
  const [birthday, setBirthday] = useState ("");

  const handleUpdate = (e) => {
    e.preventDefault();

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
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedtoken}` 
      }
    })
    .then ((response) => response.JSON())
    .then((data) => {
      console.log("Login response: ", data);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        onLoggedIn(data.user, data.token);
      alert('Successfully updated user information');
      window.location.assign("/");
      }
  })
  .catch((error) => {
    console.log(error);
      alert('Sorry, something went wrong? Please try again!' + error);
  });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Update Profile</Card.Title>
          <Form onSubmit={handleUpdate}>
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
                  minLength="6"
                  placeholder="Your password must have 6 or more characters"
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
            <Button 
              variant="warning"
              type="submit"
              onClick={handleUpdate}
            >
              Update user
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
