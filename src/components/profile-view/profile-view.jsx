import React from 'react';
import { Row } from 'react-bootstrap';

import { UpdateUser } from './update-user';
import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';

export const ProfileView = () => {

  return (
    <Row>
      <UserInfo name={user.Username} email={ user.Email} birthday={user.Birthday}/>
      <UpdateUser handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
      <FavoriteMovies favoriteMovies={FavoriteMovies} />
    </Row>
  );
};