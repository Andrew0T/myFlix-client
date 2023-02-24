import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DirectorView = ({ onBackClick }) => {

  return (
    <Container className="content">
    <Row>
      <Col>
      <Card.Header>
        {director.Name}
        </Card.Header>
      <Card.Body className="director-textarea">
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
          <span>Born: </span>
          <span>{director.Birth}</span>
          </div>
          <div>
          <span>Death: </span>
          <span>{director.Death}</span>
          </div>
          <Link to={`/movies/directors`}>
            <Button
            className="button-director-view"
            variant="secondary"
            onClick={() => { onBackClick();
            }}>
            Back
            </Button>
          </Link>
        </Card>
        </Card.Body>
      </Col>
      
    </Row>
  </Container>
  );
};
 
DirectorView.propTypes = {
  movie: PropTypes.array.isRequired,
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string.isRequired
  }).isRequired,
};