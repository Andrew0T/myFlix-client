import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const GenreView = ({ genre, onBackClick }) => {

  return (
    <Container className="content">
    <Row>
      <Col>
      <Card.Header>{genre}</Card.Header>
        <Card>
          <div>
          <span>Genre: </span>
          <span>{genre.Name}</span>
          </div>
          <div>
          <span>Description: </span>
          <span>{genre.Description}</span>
          </div>
          <Card.Body className="flex-column">
              <Card.Title>{movie.genre}</Card.Title>
              <Link to={`/movies/genres/${movie._id}`}>
                <Button 
                  variant="primary">
                    Open
                </Button>
              </Link>
              <Link to={`/movies/genres/${movie._id}`}>
                <Button
                  variant="secondary"
                  onClick={() => { onBackClick();
                  }}>
                  Back
                </Button>
              </Link>
            </Card.Body>       
        </Card>
      </Col>
    </Row>
  </Container>
  );
};
 
GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};