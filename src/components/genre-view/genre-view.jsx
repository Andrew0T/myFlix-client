import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./genre-view.scss";

export const GenreView = ({ genre, onBackClick }) => {

  return (
    <Container className="content">
    <Row>
      <Col>
      <Card.Header>{genre}</Card.Header>
        <Card>
        <Card.Body>  
        <Card.Title>{genre.Name}</Card.Title>
        <Card.Text>{genre.Description}</Card.Text>
        </Card.Body>
          <div>
          <span>Genre: </span>
          <span>{genre.Name}</span>
          </div>
          <div>
          <span>Description: </span>
          <span>{genre.Description}</span>
          </div>        
        </Card>
      </Col>
      <Link to={`/movies/genres`}>
      <Button
        className="button-genre-view"
        variant="secondary"
        onClick={() => { onBackClick();
        }}>
        Back
      </Button>
      </Link>
    </Row>
  </Container>
  );
};
 
GenreView.propTypes = {
  movies: PropTypes.array.isRequired,
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};