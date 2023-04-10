import React from "react";
import { Button, Col, Container, Row,} from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { MoviesFilter } from "../movies-filter/movies-filter";

export const FavoriteMovies = ({ movies }) => {
  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));
  const favoritemovies = movies.filter(movie => user.FavoriteMovies.includes(movie._id));

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
              {favoritemovies.map((movie) => (
                <Col key={movie._id} className='mb-5' xs={12} sm={6} md={4} lg={3}>
                  <MovieCard
                    movies={movies}
                  />
                </Col>
              ))}
            </>
          )}
        </Row>
    </Container>
  );
};
