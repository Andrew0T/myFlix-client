import React, { useState } from "react";
import { Button, Col, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({ movies }) => {
  const [user, setUser] = useState([]);
  let favoriteMovies = movies.filter(movie => user.FavoriteMovies.includes(movie._id));

  const addFavoriteMovie = () => {
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user}/movies/${movies}`, {        
            method: 'POST',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` 
            }
        })
        .then((response) => {
            alert('Movie has been added to Favorite Movies');
            return response.json(), console.log(response);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        })
    };

const deleteMovie = () => {
  fetch(`https://myflixdb-202302.herokuapp.com/users/${user}/movies/${movies}`, {
          method: 'DELETE',
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` }
      })
      .then((response) => {
          alert('Movie has been deleted');
          return response.json(), console.log(response);
      })
      .catch((error) => {
          alert('Something went wrong' + error);
      })
    };

  return (
    <Row>
      {favoriteMovies.length === 0 ? (
        <Col>Your list of favorite movies is empty</Col>
      ) : (
        <>
          <div className='text-start h2 mb-4'>Your list of favorite movies</div>
          {favoriteMovies.map((movie) => (
            <Col className='mb-5' key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                keys={movie._id}
                movie={movie}
                user={user}
                updateUserOnFav={(user) => {
                  console.log('Update User called', user);
                  setUser(user);
                  localStorage.setItem('user', JSON.stringify(user));
                }}
              />
            </Col>
          ))}
        </>
      )}
      <Link to={`/movies/${movies._id}`}>
        <Button 
          className="add-to-favorite"
          variant="warning"
          onClick={addFavoriteMovie}
        > Add to Favorites
        </Button>
        </Link>
        <Link to={`/movies/${movies._id}`}>
        <Button 
          className="remove-from-favorite"
          variant="danger"
          onClick={deleteMovie}
        > Remove from Favorites
        </Button>
        </Link>
    </Row>
  );
};