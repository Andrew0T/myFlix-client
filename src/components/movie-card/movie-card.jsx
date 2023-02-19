import React from "react";
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  
  return (
    <Card classname="h-100">
      <Card.Img 
        variant="top"
        src={movie.ImagePath}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        {/* <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Year}</Card.Text> */}
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