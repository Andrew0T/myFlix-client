import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import { UserInfo } from './user-info';
import { UpdateUser } from './update-user';
import { DeleteUser } from './delete-user';
import { FavoriteMovies } from './favorite-movies';

export const ProfileView = ({}) => {
  const [name, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  const [email, setEmail] = useState ("");
  const [birthday, setBirthday] = useState ("");
  const [favoriteMovies, setFavoriteMovies] = useState ("");

  const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    }
  const handleUpdate = (e) => {
    e.preventDefault();
   }

  fetch(`https://myflixdb-202302.herokuapp.com/users/:Username`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((data) => {
          setUsername(name);
          setPassword(password);
          setEmail(email);
          setBirthday(birthday);
          setFavoriteMovies(favoriteMovies);
        })
        .then((response) => {
          if (response.ok) {
            alert("Update successful");
            window.location.reload();
          } else {
            alert("Update failed");
          }
        });

  return (
    <Row>
      <UserInfo name={user.Username} email={user.Email}/>
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
      <DeleteUser handleUpdate={handleUpdate}/>
      <FavoriteMovies favoriteMovies={FavoriteMovies} />
    </Row>
  );
};