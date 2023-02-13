import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Container, Row } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) return;
 
    fetch("https://myflixdb-202302.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
 
      });
  }, [token]);

    if (selectedMovie) {
      return (
        <MovieView movie={selectedMovie} onBackClick={() =>
          setSelectedMovie(null)} />
      );
    }

    if (movies.length === 0) {
      return <div> The list is empty! </div>;
    }

    if (!user) {
      return (
        <>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          or
          <SignupView />
        </>
      );
    }

    return (
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
};
