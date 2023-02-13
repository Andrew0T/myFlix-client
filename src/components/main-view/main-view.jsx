import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
<<<<<<< Updated upstream
=======
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col, Container } from "react-bootstrap";

>>>>>>> Stashed changes

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Life of Brian",
      description: "A young man, Brian, who was born one stable down and on the same night as Jesus, becomes intrigued by a young rebel, Judith. To try and impress her, Brian joins the independence movement against the Romans, the Peoples Front of Judea. However, in an attempt to hide from the Romans, he relays some of the teachings he heard from Jesus, which ends up spurring a crowd to believe he is the Messiah. While trying to get rid of his followers and reunite with Judith, he embarks on several misadventures.",
      genre: "Comedy",
      director: "Terry Jones",
      image:
      "https://www.themoviedb.org/t/p/original/1bj2KYxLi0kEu5YKrf53mFd8buQ.png"
    },
    {
      id: 2,
      title: 'Lord of the Rings, The Fellowship of the Ring',
      description: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.',
      genre: "Fantasy",
      director: "Peter Jackson",
      image: 
      "https://www.themoviedb.org/t/p/original/tqj7NKj11keFuLzPsBDMUq2dOUO.jpg"
    },
    {
      id: 3,
      title: "Dune",
      description: "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
      genre: "Fantasy",
      director: "David Lynch",
      image: 
      "https://www.themoviedb.org/t/p/original/5wJ2tckpvwcxGCAgZiccodwEJpf.jpg"
    },
    {
      id: 4,
      title: "Chocolat",
      description: "A woman and her daughter open a chocolate shop in a conservative village in France, much to the villager\'s disapproval. Over time, they win the people\'s hearts and also help them with their troubles.",
      genre: "Romantic Drama",
      director: "Lasse Hallstroem",
      imagePath: 
      "https://www.themoviedb.org/t/p/original/63ItW5WInTWZkRdyTfCZIn6ZvbH.jpg"
    }
  ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
      return (
        <MovieView movie={selectedMovie} onBackClick={() =>
          setSelectedMovie(null)} />
      );
    }

    if (movies.length === 0) {
      return <div> The list is empty! </div>;
    }

    return (
<<<<<<< Updated upstream
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
    );
=======
      <Container>
        <Row className="justify-content-md-center">
          <Col classname="mb-4" key={movie.id} md={3} >
            {movies.map((movie) => (
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </Col>
          <Col>
            <button onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
              }}>
                Logout
            </button>
          </Col>
        </Row>
      </Container>
  );
>>>>>>> Stashed changes
};
