import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  
  return (
    <Card className="h-100">
      <Card.Img 
        variant="top"
        src={movie.ImagePath}
      />
      <Card.Body className="flex-column">
        <Card.Title>{movie.Title}</Card.Title>
        <Link to={`/movies`}>
          <Button variant="primary">Open</Button>
        </Link>
      </Card.Body>      
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};