import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  
  return (
    <Card className="h-100" >
      <Card.Img 
        variant="top"
        src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <br /> Director: 
        <Link 
          to={`/movies/${movie._id}/Director`}
        >
        <Button
          variant="link">
          {movie.Director.Name}
        </Button>
        </Link>
        <br />Genre: 
        <Link 
          to={`/movies/${movie._id}/Genre`}
        >
        <Button variant="link">
          {movie.Genre.Name}
        </Button>
        </Link>
        <br />
        <Link 
          to={`/movies/${movie._id}`}
        >
        <Button 
          variant="primary"
        >
          Open
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Year: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string,
      Death: PropTypes.string
    }).isRequired
  }).isRequired
};