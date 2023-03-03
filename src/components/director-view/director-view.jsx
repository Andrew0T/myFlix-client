import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DirectorView = ({ director, onBackClick }) => {

  return (
    <Container className="content">
      <Row>
        <Col>
          <Card.Header>{director}</Card.Header>
            <Card>
              <div>
              <span>Name: </span>
              <span>{director.Name}</span>
              </div>
              <div>
              <span>Biography: </span>
              <span>{director.Bio}</span>
              </div>
              <div>
              <span>Born on: </span>
              <span>{director.Birth}</span>
              </div>
              <div>
              <span>Died on: </span>
              <span>{director.Death}</span>
              </div>
              <Card.Body className="flex-column">
              <Card.Title>{movie.director}</Card.Title>
              <Link to={`/movies/directors/${director._id}`}>
                <Button 
                  variant="primary">
                    Open
                </Button>
              </Link>
              <Link to={`/movies/${movie._id}`}>
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
 
DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string.isRequired
  }).isRequired
};