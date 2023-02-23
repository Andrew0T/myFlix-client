import React from "react";
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);

  return (
    <Card classname="h-100">
      <Card.Img 
        variant="top"
        src={movie.ImagePath}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Link to={`/movies`}>
          <Button variant="primary">Info</Button>
        </Link>
      </Card.Body>      
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }).isRequired,
};