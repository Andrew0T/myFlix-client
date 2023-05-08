import React from "react";
import { Button, Col } from "react-bootstrap";

export const DeleteUser = () => {
  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));
  
  const deleteUser = (e) => {
    e.preventDefault();

      fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    })
    .then((resJSON) => {
        console.log(resJSON)      
        alert('User account was successful deleted. Sorry to see you go.');
        localStorage.clear("token, user");
        window.location.assign("/");
    })
    .catch((error) => {
      console.log(error);
        alert('Sorry, something went wrong? Please try again!' + error);
    })
  };

  return (
    <Col>
      <div>
        <Button              
          variant="danger"
          type="submit"
          onClick={deleteUser}
        >
        Delete user?
        </Button>
      </div>
    </Col>
  );
};
