import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";
import {LoginView} from "../login-view/login-view";
import {SignupView} from "../signup-view/signup-view";
import {NavView} from "../nav-view/nav-view";
import {ProfileView} from "../profile-view/profile-view";
import {FavoriteMovies} from "../profile-view/favorite-movies";
import {DirectorView} from "../director-view/director-view";
import {GenreView} from "../genre-view/genre-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [genres, setGenres] = useState([]);

    useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflixdb-202302.herokuapp.com/movies", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
         setMovies(movies);
         setDirectors(directors);
         setGenres(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);
  
    return (
      <BrowserRouter>
        <NavView 
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Routes>
              <Route 
                path="/signup"
                element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={4}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
              />
              <Route
                path="/login"
                element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={4}>
                      <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                          localStorage.getItem();
                        }}/>
                    </Col>
                  )}
                </>
                }
              />              
              <Route
                path="/movies/:movieId"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={6}>
                      <MovieView
                       token={token}
                       user={user}
                       key={movies._id}
                       movies={movies}
                       />
                    </Col>
                  )}
                </>
                }
              />
              <Route
                path="/"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col 
                          className="mb-5"
                          key={movie._id}
                          md={3}
                          >
                          <MovieCard
                          token={token}
                          user={user}
                          movie={movie}
                          />
                        </Col>
                      ))}
                    </>
                  )}
                </>
                }
              />              
              <Route 
                path="/users/:Username"
                element={
                <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : user.length === 0 ? (
                  <Col>No such user found!</Col>
                ) : (
                  <Col md={4}>
                      <ProfileView
                        token={token}
                        user={user}
                      />
                  </Col>
                )}
                </>
                }
              />
              <Route
                path="/users/:Username/movies"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>No such user!</Col>
                  ) : (
                    <Col md={4}>
                      <FavoriteMovies
                       token={token}
                       user={user}
                       key={movies._id}
                       movies={movies}
                      />
                    </Col>
                  )}
                </>
                }
              />
              <Route
                path="/movies/directors"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={4}>
                      <DirectorView
                        token={token}
                        user={user}
                        key={movies._id}
                        movies={movies}
                        directors={directors}
                      />
                    </Col>
                  )}
                </>
                }
              />
              <Route
                path="/movies/genres"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={4}>
                      <GenreView
                        token={token}
                        user={user}
                        key={movies._id}
                        movies={movies}
                        genres={genres}
                      />
                    </Col>
                  )}
                </>
                }
              />
            </Routes>
          </Row>
      </Container>
    </BrowserRouter>
  );
};
