import React from "react";
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button variant="link">Open</Button>
          </Link>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Born: PropTypes.string.isRequired,
      Death: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};