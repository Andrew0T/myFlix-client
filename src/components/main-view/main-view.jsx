import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavView } from "../nav-view/nav-view";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }
 
    fetch(`https://myflixdb-202302.herokuapp.com/movies`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
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
                    <Col md={5}>
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
                    <Col md={5}>
                      <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        }}
                      />
                    </Col>
                  )}
                </>
                }
              />
              
              <Route
                path="/movies/:MovieId"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView
                       keys={movies.id} 
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
                          key={movie.id}
                          md={3}>
                          <MovieCard movie={movie} />
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
                  <Col>
                      <ProfileView user={user} />
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
