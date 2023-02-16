import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = () => {
  const {movieId} = useParams();
  const movie = movies.find((m) => m.id === movieId);
  
  return (
    <Container className="content">
    <Row>
      <Col>
        <Card>
          <div>
            <img className="w-100" src={movie.ImagePath} />
          </div>
          <div>
          <span>Title: </span>
          <span>{movie.title}</span>
          </div>
          <div>
          <span>Description: </span>
          <span>{movie.description}</span>
          </div>
          <div>
          <span>Genre: </span>
          <span>{movie.genre}</span>
          </div>
          <div>
          <span>Director: </span>
          <span>{movie.Director}</span>
          </div>
        </Card>
      </Col>
      <Link to={`/`}>
        <button className="button-back primary">Back</button>
      </Link>
      <Link>
        <Button 
          className="add-to-favorite"
          onClick={addFavoriteMovie}
          disabled={movieExists}
        > Add to Favorites
        </Button>
        <Button 
          className="remove-from-favorite"
          variant="warning"
          onClick={removeFavoriteMovie}
          disabled={disableRemove}
        > Remove from Favorites
        </Button> 
      </Link>  
    </Row>
  </Container>
  );
};
