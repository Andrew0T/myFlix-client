import React from "react";
import { Button, Col, Container, Row,} from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { MoviesFilter } from "../movies-filter/movies-filter";

export const FavoriteMovies = ({ movies }) => {
  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));
  const movie = movies.filter(movie => user.movies.includes(movie._id));

  const removeFavorite = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
            method: 'DELETE',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((resJSON) => {
            alert('Movie has been deleted');
            console.log(resJSON);
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
          <MovieView />
        </Row>
        <Row>
          {movies.length === 0 ? (
            <Col>
            Your list of favorite movies is empty
            </Col>
          ) : (
            <>
              <Col className='text-start h2 mb-4'>
              Your list of favorite movies
              </Col>
              {movies.map((movie) => (
                <Col key={movie._id} className='mb-5' xs={12} sm={6} md={4} lg={3}>
                  <MovieCard
                    movies={movies}
                    token={token}
                    user={user}
                  />
                </Col>
              ))}
            </>
          )}
          <Button 
            variant="danger"
            onClick={removeFavorite}
        > 
          Delete from Favorites
        </Button>
        </Row>
    </Container>
  );
};
