import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);

  const addFavoriteMovie = () => {
    if (!token) return;

    fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}/movie/${movie._id}`, {
            method: 'POST',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            alert('Movie has been added to Favorite Movies');
            return response.json(), console.log(response);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        });
      };
  
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
          <span>{movie.Title}</span>
          </div>
          <div>
          <span>Description: </span>
          <span>{movie.Description}</span>
          </div>
          <div>
            <span>Year: </span>
            <span>{movie.Year}</span>
          </div>
          <Link to={`/`}>
            <button className="button-back">Back</button>
          </Link>
          <Link>
            <Button
              variant="secondary"
              onClick={addFavoriteMovie}
            > Add to Favorites
            </Button>
          </Link>  
        </Card>
      </Col>
    </Row>
  </Container>
  );
};
