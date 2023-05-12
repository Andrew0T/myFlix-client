import React from "react";
import { Container, Row,} from "react-bootstrap";
import { MoviesList } from "../movies-list/movies-list";

export const FavoriteMovies = ({ movies }) => {
  const user= JSON.parse(localStorage.getItem("user"));
  console.log(movies)
  let favoriteMovies = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));
  const isFavoriteMovies = true;

  return (
    <Container className="content">
      <Row>
        <MoviesList 
          isFavoriteMovies={isFavoriteMovies}
          favoriteMovies= {favoriteMovies}
        />
      </Row>
    </Container>
  );
};
