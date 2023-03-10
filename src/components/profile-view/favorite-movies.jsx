import React, { useCallback } from "react";
import { useSelector} from "react-redux";
import { Button, Col, Container, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MoviesFilter } from "../movies-filter/movies-filter";

export const FavoriteMovies = ({ user, token}) => {
  const movies = useSelector((state) => state.movies.list);
  const favoriteMovies = useCallback(()=>{movies.filter((movie) => user.favoriteMovies.includes(movie.id))},[movies]);

  const addFavoriteMovie = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user}/movies/${movies._id}`, {        
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
        });
    };

  const deleteMovie = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user}/movies/${movies._id}`, {
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
    <Container className="content">
        <Row>
          <MoviesFilter />
        </Row>
        <Row>
          {favoriteMovies.length === 0 ? (
            <Col>Your list of favorite movies is empty</Col>
          ) : (
            <>
              <Col className='text-start h2 mb-4'>
                Your list of favorite movies
              </Col>
              {favoriteMovies.map((movie) => (
                <Col key={movies._id} className='mb-5' xs={12} sm={6} md={4} lg={3}>
                  <MovieCard
                    movie={movie}
                    user={user}
                    token={token}
                    updateUserOnFav={(user) => {
                      console.log('Update User called', user);
                      setUser(user);
                      setToken(token);
                      localStorage.setItem('user', JSON.stringify(user));
                    }}
                  />
                </Col>
              ))}
            </>
          )}
          <Link to={`/users/${user}/movies/${movies._id}`}>
            <Button 
              className="add-to-favorite"
              variant="warning"
              onClick={addFavoriteMovie}
            > 
            Add to Favorites
            </Button>
          </Link>
          <Link to={`/users/${user}/movies/${movies._id}`}>
            <Button 
              className="remove-from-favorite"
              variant="danger"
              onClick={deleteMovie}
            > 
            Remove from Favorites
            </Button>
          </Link>
        </Row>
    </Container>
  );
};
