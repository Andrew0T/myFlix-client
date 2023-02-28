import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  
  return (
    <Container className="content">
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img 
              variant="top"
              src={movie.ImagePath}
            />
            <Card.Body className="flex-column">
              <Card.Title>{movie.Title}</Card.Title>
              <Link to={`/movies/${movie._id}`}>
                <Button variant="primary">Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Year: PropTypes.string    
  }).isRequired
};